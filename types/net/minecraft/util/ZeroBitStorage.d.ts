import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BitStorageExtension } from '../../../net/caffeinemc/mods/sodium/client/world/BitStorageExtension.d.ts'
import type { BitStorage } from '../../../net/minecraft/util/BitStorage.d.ts'
import type { Palette } from '../../../net/minecraft/world/level/chunk/Palette.d.ts'
export class ZeroBitStorage extends Object implements BitStorageExtension, BitStorage {
    static RAW: number[];
    constructor(size: number)
    readonly size: number;
    copy(): BitStorage;
    get(index: number): number;
    getAll(output: (param0: number) => void): void;
    getAndSet(index: number, value: number): number;
    getBits(): number;
    getRaw(): number[];
    getSize(): number;
    set(index: number, value: number): void;
    sodium$unpack(arg0: Object[], arg1: Palette<Object>): void;
    unpack(output: number[]): void;
}