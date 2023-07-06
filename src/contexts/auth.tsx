import { supabase } from "@/services/supabase";
import { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

const AuthContext = createContext<AuthContext>({});

function useAuth() {
  return useContext(AuthContext);
}

interface AuthContext {
  user?: User | null;
  session?: Session | null;
}

function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | undefined | null>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gotSession = localStorage.getItem("authSession");
    if (gotSession) {
      console.log("Retrieved: ", gotSession);
      setSession(JSON.parse(gotSession));
      setUser(JSON.parse(gotSession));
    }
    async function getSession() {
      setLoading(false);
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (_, session) => {
        if (session) {
          console.log("New session: ", session);
          setUser(session.user);
          localStorage.setItem("authSession", JSON.stringify(session));
          setSession(session);
        } else {
          localStorage.removeItem("authSession");
          setSession(null);
          setUser(null);
        }
        setLoading(false);
      });
      return () => {
        subscription?.unsubscribe();
      };
    }
    getSession();
  }, []);

  const value = {
    user,
    session,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
