import React, { useEffect } from "react";

export default function WrapperDocumentTitle({ title, children }) {
  useEffect(() => {
    document.title = title || "Job-Portal";
  }, [title]);
  return <>{children}</>;
}
