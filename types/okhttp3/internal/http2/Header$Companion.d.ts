import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Header$Companion extends Object {
    PSEUDO_PREFIX: ByteString;
    RESPONSE_STATUS: ByteString;
    RESPONSE_STATUS_UTF8: string;
    TARGET_AUTHORITY: ByteString;
    TARGET_AUTHORITY_UTF8: string;
    TARGET_METHOD: ByteString;
    TARGET_METHOD_UTF8: string;
    TARGET_PATH: ByteString;
    TARGET_PATH_UTF8: string;
    TARGET_SCHEME: ByteString;
    TARGET_SCHEME_UTF8: string;
}