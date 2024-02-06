import { useEffect, useState } from "react";

export function Effect() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(
    function updateFullNameOnNamesChange() {
      setFullName(firstName + " " + lastName);
    },
    [firstName, lastName],
  );

  return (
    <form>
      <input
        placeholder="Your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>{fullName}</p>
    </form>
  );
}
