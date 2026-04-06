import { APIRequestContext, expect } from "@playwright/test";

export interface ApiHealthResponse {
  status: "ok" | "fail";
  version: string;
}

export async function getHealth(
  request: APIRequestContext,
  endpoint = "/api/health"
): Promise<ApiHealthResponse> {
  const response = await request.get(endpoint);
  expect(response.ok()).toBeTruthy();
  return (await response.json()) as ApiHealthResponse;
}
