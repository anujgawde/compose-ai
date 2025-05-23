export interface User {
    email: string;
    access_token: string;
    refresh_token: string;
    token_type: string;
    scope: string;
    refresh_token_expires_in: number;
    expiry_date: number;
    history_id: string;
  }