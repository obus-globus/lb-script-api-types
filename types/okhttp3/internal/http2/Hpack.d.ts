import type { Object } from '../../../java/lang/Object.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Hpack extends Object {
    static INSTANCE: Hpack;
    readonly NAME_TO_FIRST_INDEX: Map<ByteString, number>;
    // private PREFIX_4_BITS: number;
    // private PREFIX_5_BITS: number;
    // private PREFIX_6_BITS: number;
    // private PREFIX_7_BITS: number;
    // private SETTINGS_HEADER_TABLE_SIZE: number;
    // private SETTINGS_HEADER_TABLE_SIZE_LIMIT: number;
    readonly STATIC_HEADER_TABLE: Header[];
    checkLowercase(name: ByteString): ByteString;
    // private nameToFirstIndex(): Map<ByteString, number>;
}