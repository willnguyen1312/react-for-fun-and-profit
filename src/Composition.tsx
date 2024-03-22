export function Composition() {
  const firstName = "John";
  const lastName = "Doe";
  const fullName = `${firstName} ${lastName}`;

  return (
    <section>
      <h1>Composition</h1>

      <NameDisplay firstName={firstName} lastName={lastName} />

      <Text value={fullName} />
    </section>
  );
}

function NameDisplay({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  const fullName = `${firstName} ${lastName}`;
  return <p>{fullName}</p>;
}

function Text({ value }: { value: string }) {
  return <p>{value}</p>;
}
