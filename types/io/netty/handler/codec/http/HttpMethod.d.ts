import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class HttpMethod extends Object implements Comparable<HttpMethod> {
    static CONNECT: HttpMethod;
    static DELETE: HttpMethod;
    static GET: HttpMethod;
    static HEAD: HttpMethod;
    static OPTIONS: HttpMethod;
    static PATCH: HttpMethod;
    static POST: HttpMethod;
    static PUT: HttpMethod;
    static TRACE: HttpMethod;
    static valueOf(paramarg0: string): HttpMethod;
    constructor(arg0: string)
    // private name: AsciiString;
    asciiName(): AsciiString;
    compareTo(arg0: HttpMethod): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}