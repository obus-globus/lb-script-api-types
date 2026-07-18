import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HpackDecoder$Http2HeadersSink } from '../../../../../io/netty/handler/codec/http2/HpackDecoder$Http2HeadersSink.d.ts'
import type { HpackDynamicTable } from '../../../../../io/netty/handler/codec/http2/HpackDynamicTable.d.ts'
import type { HpackHeaderField } from '../../../../../io/netty/handler/codec/http2/HpackHeaderField.d.ts'
import type { HpackHuffmanDecoder } from '../../../../../io/netty/handler/codec/http2/HpackHuffmanDecoder.d.ts'
import type { HpackUtil$IndexType } from '../../../../../io/netty/handler/codec/http2/HpackUtil$IndexType.d.ts'
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpackDecoder extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private encoderMaxDynamicTableSize: number;
    // private hpackDynamicTable: HpackDynamicTable;
    // private huffmanDecoder: HpackHuffmanDecoder;
    // private maxDynamicTableSize: number;
    // private maxDynamicTableSizeChangeRequired: boolean;
    // private maxHeaderListSize: number;
    // private decode(arg0: ByteBuf, arg1: HpackDecoder$Http2HeadersSink): void;
    decode(arg0: number, arg1: ByteBuf, arg2: (Object | null)[], arg3: boolean): void;
    // private decodeDynamicTableSizeUpdates(arg0: ByteBuf): void;
    getHeaderField(arg0: number): HpackHeaderField;
    // private getIndexedHeader(arg0: number): HpackHeaderField;
    getMaxHeaderListSize(): number;
    getMaxHeaderTableSize(): number;
    // private insertHeader(arg0: HpackDecoder$Http2HeadersSink, arg1: AsciiString, arg2: AsciiString, arg3: HpackUtil$IndexType): void;
    length(): number;
    // private readName(arg0: number): AsciiString;
    // private readStringLiteral(arg0: ByteBuf, arg1: number, arg2: boolean): AsciiString;
    // private setDynamicTableSize(arg0: number): void;
    setMaxHeaderListSize(arg0: number): void;
    setMaxHeaderTableSize(arg0: number): void;
    size(): number;
}