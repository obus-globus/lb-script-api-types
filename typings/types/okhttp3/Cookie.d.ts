import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Cookie$Builder } from '../okhttp3/Cookie$Builder.d.ts'
import type { Cookie$Companion } from '../okhttp3/Cookie$Companion.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
export class Cookie extends Object {
    static Companion: Cookie$Companion;
    static parse(url: HttpUrl, setCookie: string): Cookie | null;
    static parseAll(url: HttpUrl, headers: Pair<string, string>[]): Cookie[];
    private constructor(name: string, value: string, expiresAt: number, domain: string, path: string, secure: boolean, httpOnly: boolean, persistent: boolean, hostOnly: boolean, sameSite: string | null)
    // private domain: string;
    domain(): string;
    // private expiresAt: number;
    expiresAt(): number;
    // private hostOnly: boolean;
    hostOnly(): boolean;
    // private httpOnly: boolean;
    httpOnly(): boolean;
    // private name: string;
    name(): string;
    // private path: string;
    path(): string;
    // private persistent: boolean;
    persistent(): boolean;
    // private sameSite: string | null;
    /*not mapped: */ sameSite(): string | null;
    // private secure: boolean;
    secure(): boolean;
    // private value: string;
    value(): string;
    domain(): string;
    equals(other: Object | null): boolean;
    expiresAt(): number;
    hashCode(): number;
    hostOnly(): boolean;
    httpOnly(): boolean;
    matches(url: HttpUrl): boolean;
    name(): string;
    newBuilder(): Cookie$Builder;
    path(): string;
    persistent(): boolean;
    secure(): boolean;
    toString(): string;
    toString(forObsoleteRfc2965: boolean): string;
    value(): string;
}