function After() {
  return <div></div>;
}

function Before() {
  return <div></div>;
}

export function CompoundComponent() {
  return (
    <>
      <section>Compound Component</section>

      <Before />

      <After />
    </>
  );
}
