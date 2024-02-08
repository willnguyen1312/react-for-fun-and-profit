import { graphql, HttpResponse } from "msw";

// Represent the list of all posts in a Map.
const allPosts = new Map([
  [
    "e82f332c-a4e7-4463-b440-59bc91792634",
    {
      id: "e82f332c-a4e7-4463-b440-59bc91792634",
      title: "Introducing a new JavaScript runtime",
    },
  ],
  [
    "64734573-ce54-435b-8528-106ac03a0e11",
    {
      id: "64734573-ce54-435b-8528-106ac03a0e11",
      title: "Common software engineering patterns",
    },
  ],
]);

export const handlers = [
  graphql.query("ListPosts", () => {
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        posts: Array.from(allPosts.values()),
      },
    });
  }),
];
