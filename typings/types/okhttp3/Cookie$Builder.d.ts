import type { Object } from '../java/lang/Object.d.ts'
import type { Cookie } from '../okhttp3/Cookie.d.ts'
export class Cookie$Builder extends Object {
    constructor()
    constructor(cookie: Cookie)
    // private domain: string | null;
    // private expiresAt: number;
    // private hostOnly: boolean;
    // private httpOnly: boolean;
    // private name: string | null;
    // private path: string;
    // private persistent: boolean;
    // private sameSite: string | null;
    // private secure: boolean;
    // private value: string | null;
    build(): Cookie;
    domain(domain: string): Cookie$Builder;
    // private domain(domain: string, hostOnly: boolean): Cookie$Builder;
    expiresAt(expiresAt: number): Cookie$Builder;
    hostOnlyDomain(domain: string): Cookie$Builder;
    httpOnly(): Cookie$Builder;
    name(name: string): Cookie$Builder;
    path(path: string): Cookie$Builder;
    sameSite(sameSite: string): Cookie$Builder;
    secure(): Cookie$Builder;
    value(value: string): Cookie$Builder;
}