interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="h-screen flex items-center justify-center">{children}</div>;
};
export default AuthLayout;
