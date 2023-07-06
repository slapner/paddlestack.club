import { FunctionComponent, PropsWithChildren } from "react";

export const TypographyH1: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const TypographyH2: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyH3: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};
