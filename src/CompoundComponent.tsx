import { createContext, useContext, useState } from "react";

const AlertContext = createContext<{
  show: boolean;
  setShow: (show: boolean) => void;
} | null>(null);

function useAlertContext() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within a AlertProvider");
  }
  return context;
}

function Alert({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <AlertContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      <div className={className}>{children}</div>
    </AlertContext.Provider>
  );
}

Alert.Button = AlertButton;
Alert.Content = AlertContent;

function AlertButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setShow } = useAlertContext();

  return (
    <button
      className={className}
      onClick={() => {
        setShow(true);
      }}
    >
      {children}
    </button>
  );
}

function AlertContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { show } = useAlertContext();
  return show ? (
    <div role="alert" className={className}>
      {children}
    </div>
  ) : null;
}

function After() {
  return (
    <Alert className="py-4">
      <Alert.Button className="bg-cyan-500">Show alert</Alert.Button>
      <Alert.Content className="color-red-500">Alert❗</Alert.Content>
    </Alert>
  );
}

function AlertBefore({
  alertContent,
  alertStyle = "",
  buttonContent,
  buttonStyle = "",
  wrapperStyle = "",
}: {
  alertContent: string;
  alertStyle?: string;
  buttonContent: string;
  buttonStyle?: string;
  wrapperStyle?: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={wrapperStyle}>
      <button
        className={buttonStyle}
        onClick={() => {
          setShow(!show);
        }}
      >
        {buttonContent}
      </button>
      {show && (
        <div className={alertStyle} role="alert">
          {alertContent}
        </div>
      )}
    </div>
  );
}

export function Before() {
  return (
    <AlertBefore
      alertContent="Alert❗"
      alertStyle="color-red-500"
      buttonContent="Show alert"
      buttonStyle="bg-cyan-500"
      wrapperStyle="py-4"
    />
  );
}

export function CompoundComponent() {
  return (
    <>
      <section>Compound Component</section>

      {/* <Before /> */}

      <After />
    </>
  );
}
