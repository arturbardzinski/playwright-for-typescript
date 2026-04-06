// 05: Szybka sciagawka utility types.
// Uruchom: npm run learn:05

interface User {
  id: string;
  email: string;
  role: "admin" | "user";
}

type UserUpdate = Partial<User>;
type UserPublic = Pick<User, "id" | "email">;
type RoleMap = Record<User["role"], string>;

const update: UserUpdate = { email: "new.email@example.com" };
const publicData: UserPublic = { id: "u-1", email: "a@example.com" };
const roles: RoleMap = {
  admin: "pelny dostep",
  user: "ograniczony dostep"
};

console.log("Partial<User>:", update);
console.log("Pick<User, ...>:", publicData);
console.log("Record<role, opis>:", roles);
