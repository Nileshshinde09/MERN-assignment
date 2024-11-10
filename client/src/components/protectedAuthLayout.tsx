import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
interface ProtectedAuthLayoutProps {
  children: React.ReactNode;
  authentication: boolean;
}
const ProtectedAuthLayout: React.FC<ProtectedAuthLayoutProps> = ({
  children,
  authentication = true,
}):React.ReactNode => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const authStatus = true;
  useEffect(() => {
    if (authentication) {
      navigate("/login", { state: { from: location } });
    } 
    else {
      if (authStatus) {
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo);
      }
    }
    setLoader(false);
  }, [authentication, navigate, location]);

  return loader ? (
    <h1 className="w-full text-center">Loading...</h1>
  ) : (
    <>{children}</>
  );
};

export default ProtectedAuthLayout;
