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

interface iOrganisation {
  organisationName?: string;
  email: string;
}

export const users = atom({
  key: "users",
  default: {} as iUser | null,
  effects_UNSTABLE: [persistAtom],
});

export const organisation = atom({
  key: "organisation",
  default: [] as Array<iOrganisation> | null,
  effects_UNSTABLE: [persistAtom],
});

export const organisationMembers = atom({
  key: "organisationMembers",
  default: [] as Array<iOrganisation> | null,
  effects_UNSTABLE: [persistAtom],
});

export const candidate = atom({
  key: "candidate",
  default: [] as Array<iOrganisation> | null,
  effects_UNSTABLE: [persistAtom],
});

export const presidentVote = atom({
  key: "presidentVote",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
