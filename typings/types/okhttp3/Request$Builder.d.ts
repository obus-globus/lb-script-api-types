import type { Class } from '../java/lang/Class.d.ts'
import type { URL } from '../java/net/URL.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { KClass } from '../kotlin/reflect/KClass.d.ts'
import type { CacheControl } from '../okhttp3/CacheControl.d.ts'
import type { Headers$Builder } from '../okhttp3/Headers$Builder.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { Tags } from '../okhttp3/internal/Tags.d.ts'
export class Request$Builder extends Object {
    constructor()
    constructor(request: Request)
    // private body: RequestBody | null;
    /*not mapped: */ getBody$okhttp(): RequestBody | null;
    // private cacheUrlOverride: HttpUrl | null;
    /*not mapped: */ getCacheUrlOverride$okhttp(): HttpUrl | null;
    // private headers: Headers$Builder;
    /*not mapped: */ getHeaders$okhttp(): Headers$Builder;
    // private method: string;
    /*not mapped: */ getMethod$okhttp(): string;
    // private tags: Tags;
    /*not mapped: */ getTags$okhttp(): Tags;
    // private url: HttpUrl | null;
    /*not mapped: */ getUrl$okhttp(): HttpUrl | null;
    addHeader(name: string, value: string): Request$Builder;
    build(): Request;
    cacheControl(cacheControl: CacheControl): Request$Builder;
    cacheUrlOverride(cacheUrlOverride: HttpUrl | null): Request$Builder;
    // private canonicalUrl(url: string): string;
    delete(body: RequestBody | null): Request$Builder;
    get(): Request$Builder;
    gzip(): Request$Builder;
    head(): Request$Builder;
    header(name: string, value: string): Request$Builder;
    headers(headers: Pair<string, string>[]): Request$Builder;
    method(method: string, body: RequestBody | null): Request$Builder;
    patch(body: RequestBody): Request$Builder;
    post(body: RequestBody): Request$Builder;
    put(body: RequestBody): Request$Builder;
    query(body: RequestBody): Request$Builder;
    removeHeader(name: string): Request$Builder;
    tag<T extends Object | number | string | boolean>(tag: T | null): Request$Builder;
    tag<T extends Object | number | string | boolean>(type: Class<T>, tag: T | null): Request$Builder;
    tag(tag: Object | null): Request$Builder;
    tag<T extends Object | number | string | boolean>(type: KClass<T>, tag: T | null): Request$Builder;
    url(url: URL): Request$Builder;
    url(url: string): Request$Builder;
    url(url: HttpUrl): Request$Builder;
}