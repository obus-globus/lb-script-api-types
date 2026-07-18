import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Cookie$Companion } from '../../../io/ktor/http/Cookie$Companion.d.ts'
import type { CookieEncoding } from '../../../io/ktor/http/CookieEncoding.d.ts'
import type { GMTDate } from '../../../io/ktor/util/date/GMTDate.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
export class Cookie extends Object implements Serializable {
    static Companion: Cookie$Companion;
    static write$Self$ktor_http(self: Cookie, output: CompositeEncoder, serialDesc: SerialDescriptor): void;
    constructor(name: string, value: string, encoding: CookieEncoding, maxAge: number | null, expires: GMTDate | null, domain: string | null, path: string | null, secure: boolean, httpOnly: boolean, extensions: JavaMap<string, string | null>)
    readonly domain: string | null;
    readonly encoding: CookieEncoding;
    readonly expires: GMTDate | null;
    readonly extensions: JavaMap<string, string | null>;
    readonly httpOnly: boolean;
    // private maxAge: number | null;
    /*not mapped: */ getMaxAgeInt(): number | null;
    readonly name: string;
    readonly path: string | null;
    readonly secure: boolean;
    readonly value: string;
    component1(): string;
    component10(): JavaMap<string, string | null>;
    component2(): string;
    component3(): CookieEncoding;
    component4(): number | null;
    component5(): GMTDate | null;
    component6(): string | null;
    component7(): string | null;
    component8(): boolean;
    component9(): boolean;
    copy(name: string, value: string, encoding: CookieEncoding, maxAge: number | null, expires: GMTDate | null, domain: string | null, path: string | null, secure: boolean, httpOnly: boolean, extensions: JavaMap<string, string | null>): Cookie;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    write$Self(self: Cookie, output: CompositeEncoder, serialDesc: SerialDescriptor): void;
    // private writeReplace(): Object;
}