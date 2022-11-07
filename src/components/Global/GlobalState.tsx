import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface iUser {
  organisationName?: {};
  presidentPosition?: {}[];
  voter?: {}[];
  orgName?: string;
  orgEmail?: string;
  fullName?: string;
  email: string;
  password: string;
  image?: string;
  voteCode?: string;
  token?: string;
  verified?: boolean;
  superAdmin?: boolean;
}

export const users = atom({
  key: "users",
  default: {} as iUser | null,
  effects_UNSTABLE: [persistAtom],
});
