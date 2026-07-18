import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HpackEncoder$NameEntry } from '../../../../../io/netty/handler/codec/http2/HpackEncoder$NameEntry.d.ts'
import type { HpackEncoder$NameValueEntry } from '../../../../../io/netty/handler/codec/http2/HpackEncoder$NameValueEntry.d.ts'
import type { HpackHeaderField } from '../../../../../io/netty/handler/codec/http2/HpackHeaderField.d.ts'
import type { HpackHuffmanEncoder } from '../../../../../io/netty/handler/codec/http2/HpackHuffmanEncoder.d.ts'
import type { HpackUtil$IndexType } from '../../../../../io/netty/handler/codec/http2/HpackUtil$IndexType.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HpackEncoder extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number, arg2: number)
    // private hashMask: number;
    // private head: HpackEncoder$NameValueEntry;
    // private hpackHuffmanEncoder: HpackHuffmanEncoder;
    // private huffCodeThreshold: number;
    // private ignoreMaxHeaderListSize: boolean;
    // private latest: HpackEncoder$NameValueEntry;
    readonly maxHeaderListSize: number;
    readonly maxHeaderTableSize: number;
    // private nameEntries: HpackEncoder$NameEntry[];
    // private nameValueEntries: HpackEncoder$NameValueEntry[];
    // private size: number;
    // private addNameEntry(arg0: CharSequence, arg1: number, arg2: number): void;
    // private addNameValueEntry(arg0: CharSequence, arg1: CharSequence, arg2: number, arg3: number, arg4: number): void;
    // private bucket(arg0: number): number;
    // private encodeAndAddEntries(arg0: ByteBuf, arg1: CharSequence, arg2: number, arg3: CharSequence, arg4: number): void;
    // private encodeHeader(arg0: ByteBuf, arg1: CharSequence, arg2: CharSequence, arg3: boolean, arg4: number): void;
    encodeHeaders(arg0: number, arg1: ByteBuf, arg2: (Object | null)[], arg3: Http2HeadersEncoder$SensitivityDetector): void;
    // private encodeHeadersEnforceMaxHeaderListSize(arg0: number, arg1: ByteBuf, arg2: (Object | null)[], arg3: Http2HeadersEncoder$SensitivityDetector): void;
    // private encodeHeadersIgnoreMaxHeaderListSize(arg0: ByteBuf, arg1: (Object | null)[], arg2: Http2HeadersEncoder$SensitivityDetector): void;
    // private encodeLiteral(arg0: ByteBuf, arg1: CharSequence, arg2: CharSequence, arg3: HpackUtil$IndexType, arg4: number): void;
    // private encodeStringLiteral(arg0: ByteBuf, arg1: CharSequence): void;
    // private ensureCapacity(arg0: number): void;
    // private getEntry(arg0: CharSequence, arg1: number): HpackEncoder$NameEntry;
    // private getEntryInsensitive(arg0: CharSequence, arg1: number, arg2: CharSequence, arg3: number): HpackEncoder$NameValueEntry;
    getHeaderField(arg0: number): HpackHeaderField;
    // private getIndex(arg0: number): number;
    // private getIndexPlusOffset(arg0: number): number;
    getMaxHeaderListSize(): number;
    getMaxHeaderTableSize(): number;
    // private getNameIndex(arg0: CharSequence): number;
    // private isEmpty(): boolean;
    // private latestCounter(): number;
    length(): number;
    // private remove(): void;
    // private removeNameEntryMatchingCounter(arg0: CharSequence, arg1: number): void;
    // private removeNameValueEntry(arg0: HpackEncoder$NameValueEntry): void;
    setMaxHeaderListSize(arg0: number): void;
    setMaxHeaderTableSize(arg0: ByteBuf, arg1: number): void;
    size(): number;
}