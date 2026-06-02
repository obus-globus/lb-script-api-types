import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CompactingPackedIntegerArray } from '../../../net/caffeinemc/mods/lithium/common/world/chunk/CompactingPackedIntegerArray.d.ts'
import type { BitStorageExtension } from '../../../net/caffeinemc/mods/sodium/client/world/BitStorageExtension.d.ts'
import type { BitStorage } from '../../../net/minecraft/util/BitStorage.d.ts'
import type { Palette } from '../../../net/minecraft/world/level/chunk/Palette.d.ts'
export class SimpleBitStorage extends Object implements CompactingPackedIntegerArray, BitStorageExtension, BitStorage {
    constructor(bits: number, size: number)
    constructor(bits: number, size: number, values: number[])
    constructor(bits: number, size: number, data: number[])
    readonly bits: number;
    // private data: number[];
    // private divideAdd: number;
    // private divideMul: number;
    // private divideShift: number;
    // private mask: number;
    readonly size: number;
    // private valuesPerLong: number;
    // private cellIndex(bitIndex: number): number;
    copy(): BitStorage;
    get(index: number): number;
    getAll(output: (param0: number) => void): void;
    getAndSet(index: number, value: number): number;
    getBits(): number;
    getRaw(): number[];
    getSize(): number;
    lithium$compact(arg0: Palette<Object>, arg1: Palette<Object>, arg2: number[]): void;
    set(index: number, value: number): void;
    sodium$unpack(arg0: Object[], arg1: Palette<Object>): void;
    unpack(output: number[]): void;
}