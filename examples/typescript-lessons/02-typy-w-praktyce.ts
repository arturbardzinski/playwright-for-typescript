// 02: Typy praktyczne pod dane testowe.
// Uruchom: npm run learn:02

type UserRole = "admin" | "manager" | "viewer";

interface UserCredentials {
  email: string;
  password: string;
  role: UserRole;
}

function createUser(overrides: Partial<UserCredentials> = {}): UserCredentials {
  return {
    email: "test.user@example.com",
    password: "Secret123!",
    role: "viewer",
    ...overrides
  };
}

const defaultUser = createUser();
const adminUser = createUser({ role: "admin", email: "admin@example.com" });

console.log("Default user:", defaultUser);
console.log("Admin user:", adminUser);
