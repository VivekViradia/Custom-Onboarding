export type FormComponentType = "aboutMe" | "address" | "birthdate";

export interface IUserData {
  email: string;
  password: string;
  aboutMe?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  birthdate?: string;
  currentStep?: number;
}

export interface IAdminConfig {
  step2: FormComponentType[];
  step3: FormComponentType[];
}
