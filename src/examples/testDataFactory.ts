export type UserRole = "admin" | "manager" | "viewer";

export interface UserCredentials {
  email: string;
  password: string;
  role: UserRole;
}

export function createUserCredentials(overrides: Partial<UserCredentials> = {}): UserCredentials {
  return {
    email: "test.user@example.com",
    password: "Secret123!",
    role: "viewer",
    ...overrides
  };
}
