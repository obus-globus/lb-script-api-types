import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class RequestContext extends Object {
    constructor(httpMethod: HttpMethod, uri: string, headers: Map$Entry<string, string>[])
    readonly contentBuffer: ByteArrayOutputStream;
    headers: Map$Entry<string, string>[];
    httpMethod: HttpMethod;
    readonly params: { [key: string]: string };
    readonly path: string;
    uri: string;
    component1(): HttpMethod;
    component2(): string;
    component3(): Map$Entry<string, string>[];
    copy(httpMethod: HttpMethod, uri: string, headers: Map$Entry<string, string>[]): RequestContext;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}