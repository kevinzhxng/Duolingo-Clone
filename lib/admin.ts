import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2itOh4TAuQwOiyhTjFUlaTI3pmz",
  "user_2j7JhiOlpXwKugwr17ioiMZV4Jy",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
