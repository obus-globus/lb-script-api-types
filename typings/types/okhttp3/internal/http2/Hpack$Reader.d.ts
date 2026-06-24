import type { Object } from '../../../java/lang/Object.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class Hpack$Reader extends Object {
    constructor(source: Source, headerTableSizeSetting: number, maxDynamicTableByteCount: number)
    dynamicTable: (Header | null)[];
    dynamicTableByteCount: number;
    headerCount: number;
    // private headerList: Header[];
    // private headerListByteCount: number;
    // private headerTableSizeSetting: number;
    // private maxDynamicTableByteCount: number;
    // private nextHeaderIndex: number;
    // private source: BufferedSource;
    // private addHeader(header: Header): void;
    // private adjustDynamicTableByteCount(): void;
    // private clearDynamicTable(): void;
    // private dynamicTableIndex(index: number): number;
    // private evictToRecoverBytes(bytesToRecover: number): number;
    getAndResetHeaderList(): Header[];
    // private getName(index: number): ByteString;
    // private insertIntoDynamicTable(index: number, entry: Header): void;
    // private isStaticHeader(index: number): boolean;
    maxDynamicTableByteCount(): number;
    // private readByte(): number;
    readByteString(): ByteString;
    readHeaders(): void;
    // private readIndexedHeader(index: number): void;
    readInt(firstByte: number, prefixMask: number): number;
    // private readLiteralHeaderWithIncrementalIndexingIndexedName(nameIndex: number): void;
    // private readLiteralHeaderWithIncrementalIndexingNewName(): void;
    // private readLiteralHeaderWithoutIndexingIndexedName(index: number): void;
    // private readLiteralHeaderWithoutIndexingNewName(): void;
}