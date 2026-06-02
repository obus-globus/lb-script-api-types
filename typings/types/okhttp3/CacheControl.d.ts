import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { CacheControl$Companion } from '../okhttp3/CacheControl$Companion.d.ts'
export class CacheControl extends Object {
    static Companion: CacheControl$Companion;
    static FORCE_CACHE: CacheControl;
    static FORCE_NETWORK: CacheControl;
    static parse(paramarg0: Pair<string, string>[]): CacheControl;
    constructor(noCache: boolean, noStore: boolean, maxAgeSeconds: number, sMaxAgeSeconds: number, isPrivate: boolean, isPublic: boolean, mustRevalidate: boolean, maxStaleSeconds: number, minFreshSeconds: number, onlyIfCached: boolean, noTransform: boolean, immutable: boolean, headerValue: string | null)
    // private headerValue: string | null;
    /*not mapped: */ getHeaderValue$okhttp(): string | null;
    // private immutable: boolean;
    immutable(): boolean;
    // private isPrivate: boolean;
    /*not mapped: */ isPrivate(): boolean;
    // private isPublic: boolean;
    /*not mapped: */ isPublic(): boolean;
    // private maxAgeSeconds: number;
    maxAgeSeconds(): number;
    // private maxStaleSeconds: number;
    maxStaleSeconds(): number;
    // private minFreshSeconds: number;
    minFreshSeconds(): number;
    // private mustRevalidate: boolean;
    mustRevalidate(): boolean;
    // private noCache: boolean;
    noCache(): boolean;
    // private noStore: boolean;
    noStore(): boolean;
    // private noTransform: boolean;
    noTransform(): boolean;
    // private onlyIfCached: boolean;
    onlyIfCached(): boolean;
    // private sMaxAgeSeconds: number;
    sMaxAgeSeconds(): number;
    immutable(): boolean;
    maxAgeSeconds(): number;
    maxStaleSeconds(): number;
    minFreshSeconds(): number;
    mustRevalidate(): boolean;
    noCache(): boolean;
    noStore(): boolean;
    noTransform(): boolean;
    onlyIfCached(): boolean;
    sMaxAgeSeconds(): number;
    toString(): string;
}