import { gql, useQuery } from "@apollo/client";

const GET_LIST = gql`
  query ListPosts {
    posts {
      id
      title
    }
  }
`;

export function Api() {
  const { data, loading, error } = useQuery(GET_LIST);

  if (loading) {
    return <section>Loading...</section>;
  }

  if (error) {
    return <section>Error: {error.message}</section>;
  }

  return <section>{JSON.stringify(data)}</section>;
}
