import React from "react";

export const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId();
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
};

const getChildId = (children) => {
  if (!React.isValidElement(children)) {
    // console.warn("Expected a single React element as children.");
    return undefined;
  }

  if ("id" in children.props) {
    return children.props.id;
  }

  return undefined;
};
