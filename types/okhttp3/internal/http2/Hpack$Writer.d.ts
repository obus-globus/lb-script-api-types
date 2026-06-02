import type { Object } from '../../../java/lang/Object.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Hpack$Writer extends Object {
    constructor(headerTableSizeSetting: number, useCompression: boolean, out: Buffer)
    dynamicTable: (Header | null)[];
    dynamicTableByteCount: number;
    // private emitDynamicTableSizeUpdate: boolean;
    headerCount: number;
    headerTableSizeSetting: number;
    maxDynamicTableByteCount: number;
    // private nextHeaderIndex: number;
    // private out: Buffer;
    // private smallestHeaderTableSizeSetting: number;
    // private useCompression: boolean;
    // private adjustDynamicTableByteCount(): void;
    // private clearDynamicTable(): void;
    // private evictToRecoverBytes(bytesToRecover: number): number;
    // private insertIntoDynamicTable(entry: Header): void;
    resizeHeaderTable(headerTableSizeSetting: number): void;
    writeByteString(data: ByteString): void;
    writeHeaders(headerBlock: Header[]): void;
    writeInt(value: number, prefixMask: number, bits: number): void;
}