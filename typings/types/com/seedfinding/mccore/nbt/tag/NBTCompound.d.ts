import type { NBTByte } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTByte.d.ts'
import type { NBTByteArray } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTByteArray.d.ts'
import type { NBTDouble } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTDouble.d.ts'
import type { NBTFloat } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTFloat.d.ts'
import type { NBTInt } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTInt.d.ts'
import type { NBTIntArray } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTIntArray.d.ts'
import type { NBTList } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTList.d.ts'
import type { NBTLong } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTLong.d.ts'
import type { NBTLongArray } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTLongArray.d.ts'
import type { NBTShort } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTShort.d.ts'
import type { NBTString } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTString.d.ts'
import type { NBTTag } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NBTCompound extends NBTTag< { [key: string]: NBTTag<Object> }> {
    static NULL: NBTCompound;
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor()
    constructor(arg0: () => { [key: string]: NBTTag<Object> })
    contains(arg0: string): boolean;
    contains(arg0: string, arg1: number): boolean;
    getBoolean(arg0: string): boolean;
    getBooleanOrDefault(arg0: string, arg1: boolean): boolean;
    getByte(arg0: string): number;
    getByteArray(arg0: string): number[];
    getByteArrayOrDefault(arg0: string, arg1: number[]): number[];
    getByteArrayTag(arg0: string): NBTByteArray;
    getByteArrayTagOrDefault(arg0: string, arg1: NBTByteArray): NBTByteArray;
    getByteOrDefault(arg0: string, arg1: number): number;
    getByteTag(arg0: string): NBTByte;
    getByteTagOrDefault(arg0: string, arg1: NBTByte): NBTByte;
    getCompound(arg0: string): { [key: string]: NBTTag<Object> };
    getCompoundOrDefault(arg0: string, arg1: { [key: string]: NBTTag<Object> }): { [key: string]: NBTTag<Object> };
    getCompoundTag(arg0: string): NBTCompound;
    getCompoundTagOrDefault(arg0: string, arg1: NBTCompound): NBTCompound;
    getDouble(arg0: string): number;
    getDoubleOrDefault(arg0: string, arg1: number): number;
    getDoubleTag(arg0: string): NBTDouble;
    getDoubleTagOrDefault(arg0: string, arg1: NBTDouble): NBTDouble;
    getFloat(arg0: string): number;
    getFloatOrDefault(arg0: string, arg1: number): number;
    getFloatTag(arg0: string): NBTFloat;
    getFloatTagOrDefault(arg0: string, arg1: NBTFloat): NBTFloat;
    getInt(arg0: string): number;
    getIntArray(arg0: string): number[];
    getIntArrayOrDefault(arg0: string, arg1: number[]): number[];
    getIntArrayTag(arg0: string): NBTIntArray;
    getIntArrayTagOrDefault(arg0: string, arg1: NBTIntArray): NBTIntArray;
    getIntOrDefault(arg0: string, arg1: number): number;
    getIntTag(arg0: string): NBTInt;
    getIntTagOrDefault(arg0: string, arg1: NBTInt): NBTInt;
    getList(arg0: string): NBTTag<Object>[];
    getList<T extends NBTTag<Object>>(arg0: string, arg1: Class<T>): T[];
    getListElements(arg0: string): Object[];
    getListElements<T extends unknown>(arg0: string, arg1: Class<T>): T[];
    getListElementsOrDefault<T extends unknown>(arg0: string, arg1: T[], arg2: Class<T>): T[];
    getListElementsOrDefault(arg0: string, arg1: Object[]): Object[];
    getListOrDefault<T extends NBTTag<Object>>(arg0: string, arg1: T[], arg2: Class<T>): T[];
    getListOrDefault(arg0: string, arg1: NBTTag<Object>[]): NBTTag<Object>[];
    getListTag(arg0: string): NBTList;
    getListTagOrDefault(arg0: string, arg1: NBTList): NBTList;
    getLong(arg0: string): number;
    getLongArray(arg0: string): number[];
    getLongArrayOrDefault(arg0: string, arg1: number[]): number[];
    getLongArrayTag(arg0: string): NBTLongArray;
    getLongArrayTagOrDefault(arg0: string, arg1: NBTLongArray): NBTLongArray;
    getLongOrDefault(arg0: string, arg1: number): number;
    getLongTag(arg0: string): NBTLong;
    getLongTagOrDefault(arg0: string, arg1: NBTLong): NBTLong;
    getShort(arg0: string): number;
    getShortOrDefault(arg0: string, arg1: number): number;
    getShortTag(arg0: string): NBTShort;
    getShortTagOrDefault(arg0: string, arg1: NBTShort): NBTShort;
    getString(arg0: string): string;
    getStringOrDefault(arg0: string, arg1: string): string;
    getStringTag(arg0: string): NBTString;
    getStringTagOrDefault(arg0: string, arg1: NBTString): NBTString;
    getTag(arg0: string): NBTTag<Object>;
    getTagOrDefault(arg0: string, arg1: NBTTag<Object>): NBTTag<Object>;
    isEmpty(): boolean;
    putBoolean(arg0: string, arg1: boolean): NBTCompound;
    putByte(arg0: string, arg1: number): NBTCompound;
    putByteArray(arg0: string, arg1: number[]): NBTCompound;
    putDouble(arg0: string, arg1: number): NBTCompound;
    putFloat(arg0: string, arg1: number): NBTCompound;
    putInt(arg0: string, arg1: number): NBTCompound;
    putIntArray(arg0: string, arg1: number[]): NBTCompound;
    putLong(arg0: string, arg1: number): NBTCompound;
    putLongArray(arg0: string, arg1: number[]): NBTCompound;
    putShort(arg0: string, arg1: number): NBTCompound;
    putString(arg0: string, arg1: string): NBTCompound;
    putTag(arg0: string, arg1: NBTTag<Object>): NBTCompound;
    readPayload(arg0: ByteBuffer): void;
    run(arg0: (param0: NBTCompound) => void): NBTCompound;
    size(): number;
    toString(): string;
    writePayload(arg0: ByteBuffer): void;
}