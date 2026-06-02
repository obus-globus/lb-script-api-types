import type { Object } from '../../../java/lang/Object.d.ts'
import type { Header$Companion } from '../../../okhttp3/internal/http2/Header$Companion.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Header extends Object {
    static Companion: Header$Companion;
    static PSEUDO_PREFIX: ByteString;
    static RESPONSE_STATUS: ByteString;
    static RESPONSE_STATUS_UTF8: string;
    static TARGET_AUTHORITY: ByteString;
    static TARGET_AUTHORITY_UTF8: string;
    static TARGET_METHOD: ByteString;
    static TARGET_METHOD_UTF8: string;
    static TARGET_PATH: ByteString;
    static TARGET_PATH_UTF8: string;
    static TARGET_SCHEME: ByteString;
    static TARGET_SCHEME_UTF8: string;
    constructor(name: string, value: string)
    constructor(name: ByteString, value: string)
    constructor(name: ByteString, value: ByteString)
    hpackSize: number;
    name: ByteString;
    value: ByteString;
    component1(): ByteString;
    component2(): ByteString;
    copy(name: ByteString, value: ByteString): Header;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}