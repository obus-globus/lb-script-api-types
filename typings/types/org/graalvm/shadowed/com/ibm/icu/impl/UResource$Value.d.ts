import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UResource$Array } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Array.d.ts'
import type { UResource$Table } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Table.d.ts'
export abstract class UResource$Value extends Object {
    constructor()
    getAliasString(): string;
    getArray(): UResource$Array;
    getBinary(): ByteBuffer;
    getInt(): number;
    getIntVector(): number[];
    getString(): string;
    getStringArray(): string[];
    getStringArrayOrStringAsArray(): string[];
    getStringOrFirstOfArray(): string;
    getTable(): UResource$Table;
    getType(): number;
    getUInt(): number;
    isNoInheritanceMarker(): boolean;
    toString(): string;
}