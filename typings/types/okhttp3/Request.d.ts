import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { KClass } from '../kotlin/reflect/KClass.d.ts'
import type { CacheControl } from '../okhttp3/CacheControl.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Request$Builder } from '../okhttp3/Request$Builder.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { Tags } from '../okhttp3/internal/Tags.d.ts'
export class Request extends Object {
    constructor(url: HttpUrl, headers: Pair<string, string>[], method: string, body: RequestBody | null)
    constructor(builder: Request$Builder)
    // private body: RequestBody | null;
    body(): RequestBody | null;
    cacheControl(): CacheControl;
    // private cacheUrlOverride: HttpUrl | null;
    /*not mapped: */ cacheUrlOverride(): HttpUrl | null;
    // private headers: Pair<string, string>[];
    headers(): Pair<string, string>[];
    /*not mapped: */ isHttps(): boolean;
    // private lazyCacheControl: CacheControl | null;
    // private method: string;
    method(): string;
    // private tags: Tags;
    /*not mapped: */ getTags$okhttp(): Tags;
    // private url: HttpUrl;
    url(): HttpUrl;
    body(): RequestBody | null;
    cacheControl(): CacheControl;
    header(name: string): string | null;
    headers(): Pair<string, string>[];
    headers(name: string): string[];
    method(): string;
    newBuilder(): Request$Builder;
    tag<T extends Object | number | string | boolean>(): T | null;
    tag(): Object | null;
    tag<T extends Object | number | string | boolean>(type: Class<T>): T | null;
    tag<T extends Object | number | string | boolean>(type: KClass<T>): T | null;
    toCurl(includeBody: boolean): string;
    toString(): string;
    url(): HttpUrl;
}