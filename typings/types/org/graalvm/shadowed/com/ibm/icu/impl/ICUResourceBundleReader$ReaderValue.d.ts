import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { ICUResourceBundleReader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { ICUResourceBundleReader$Array } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$Array.d.ts'
import type { UResource$Array } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Array.d.ts'
import type { UResource$Table } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Table.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class ICUResourceBundleReader$ReaderValue extends UResource$Value {
    constructor()
    // private reader: ICUResourceBundleReader;
    // private res: number;
    getAliasString(): string;
    getArray(): UResource$Array;
    getBinary(): ByteBuffer;
    getInt(): number;
    getIntVector(): number[];
    getString(): string;
    getStringArray(): string[];
    // private getStringArray(array: ICUResourceBundleReader$Array): string[];
    getStringArrayOrStringAsArray(): string[];
    getStringOrFirstOfArray(): string;
    getTable(): UResource$Table;
    getType(): number;
    getUInt(): number;
    isNoInheritanceMarker(): boolean;
}