import type { ICUResourceBundleReader } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { ICUResourceBundleReader$Array } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$Array.d.ts'
import type { UResource$Array } from '../../../../com/ibm/icu/impl/UResource$Array.d.ts'
import type { UResource$Table } from '../../../../com/ibm/icu/impl/UResource$Table.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
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
    // private getStringArray(arg0: ICUResourceBundleReader$Array): string[];
    getStringArrayOrStringAsArray(): string[];
    getStringOrFirstOfArray(): string;
    getTable(): UResource$Table;
    getType(): number;
    getUInt(): number;
    isNoInheritanceMarker(): boolean;
}