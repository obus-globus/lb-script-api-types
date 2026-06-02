import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetMBCS$MBCSHeader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$MBCSHeader.d.ts'
import type { CharsetMBCS$UConverterMBCSTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$UConverterMBCSTable.d.ts'
import type { UConverterStaticData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/UConverterStaticData.d.ts'
export class UConverterDataReader extends Object {
    constructor(bytes: ByteBuffer)
    // private byteBuffer: ByteBuffer;
    // private posAfterStaticData: number;
    bytesReadAfterStaticData(): number;
    dataFormatHasUnicodeMask(): boolean;
    readBaseTableName(): string;
    readExtIndexes(skip: number): ByteBuffer;
    readMBCSHeader(h: CharsetMBCS$MBCSHeader): void;
    readMBCSTable(header: CharsetMBCS$MBCSHeader, mbcsTable: CharsetMBCS$UConverterMBCSTable): void;
    readStaticData(sd: UConverterStaticData): void;
}