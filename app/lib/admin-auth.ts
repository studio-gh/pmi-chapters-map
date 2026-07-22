import type {ChatGPTUser} from "../chatgpt-auth";
export function isChapterMapAdmin(user:ChatGPTUser|null):user is ChatGPTUser{return Boolean(user&&user.email.toLowerCase()==="guilherme.martins@pmi.org")}
