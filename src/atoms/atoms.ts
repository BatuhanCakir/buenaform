"use  client";
import { atom } from "jotai";

export type TenantFormType = {
  email: string;
  fullname: string;
  phonenumber: string;
  salary: string;
};
export const tenantFormAtom = atom<TenantFormType>({
  email: "",
  fullname: "",
  phonenumber: "",
  salary: "",
});
