import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { TypographyH2 } from "@/components/ui/typography";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  avatar: z.any(),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex space-x-1 justify-between">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Brian" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Clapner" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-1 justify-between">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default function Signup() {
  return (
    <Card className="w-[640px]">
      <CardHeader>
        <CardTitle>
          <TypographyH2>Sign Up</TypographyH2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
      <CardFooter>
        <p className="text-gray-600 text-sm w-full text-center">
          Already have an account?{" "}
          <Link className="text-blue-600" to="signup">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
