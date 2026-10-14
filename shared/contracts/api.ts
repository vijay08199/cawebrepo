// shared/contracts/api.ts
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface FirmResponse {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type FirmRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';
