import { ReactNode, useState } from "react";

function AfterParentComponent({
  children,
}: {
  children:
    | ReactNode
    | ((arg: {
        show: boolean;
        setShow: (value: boolean) => void;
      }) => ReactNode);
}) {
  const [show, setShow] = useState(false);

  const renderedChildren =
    typeof children === "function" ? children({ show, setShow }) : children;

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle content
      </button>

      {show && renderedChildren}
    </div>
  );
}

function After() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <AfterParentComponent>
        <div>Content</div>
      </AfterParentComponent>

      <AfterParentComponent>
        {({ show, setShow }) => {
          return <div onClick={() => setShow(!show)}>Custom Content</div>;
        }}
      </AfterParentComponent>
    </div>
  );
}

function BeforeParentComponent({
  children,
  setCustomShow,
  customShow,
}: {
  children: ReactNode;
  setCustomShow?: (value: boolean) => void;
  customShow?: boolean;
}) {
  const [show, setShow] = useState(false);

  const finalShow = setCustomShow ? customShow : show;

  return (
    <div>
      <button
        onClick={() => {
          if (setCustomShow) {
            setCustomShow(!customShow);
            return;
          }

          setShow(!show);
        }}
      >
        Toggle content
      </button>

      {finalShow && children}
    </div>
  );
}

function Before() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <BeforeParentComponent>
        <div>Content</div>
      </BeforeParentComponent>

      <BeforeParentComponent
        setCustomShow={(value) => setShow(value)}
        customShow={show}
      >
        <div onClick={() => setShow(!show)}>Custom Content</div>
      </BeforeParentComponent>
    </div>
  );
}

export function RenderProp() {
  return (
    <>
      <section>Render Prop</section>

      <Before />

      <After />
    </>
  );
}
