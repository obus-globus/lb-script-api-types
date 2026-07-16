import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { PaletteResize } from '../../../../../net/minecraft/world/level/chunk/PaletteResize.d.ts'
export class HashMapPalette<T extends unknown> extends Object implements Palette<T> {
    static create<A extends unknown>(parambits: number, parampaletteEntries: A[]): Palette<A>;
    constructor(bits: number)
    constructor(bits: number, values: T[])
    // private bits: number;
    // private values: T[];
    copy(): Palette<T>;
    getEntries(): T[];
    getSerializedSize(globalMap: T[]): number;
    getSize(): number;
    idFor(value: T, resizeHandler: PaletteResize<T>): number;
    maybeHas(predicate: (param0: T) => boolean): boolean;
    read(buffer: FriendlyByteBuf, globalMap: T[]): void;
    valueFor(index: number): T;
    write(buffer: FriendlyByteBuf, globalMap: T[]): void;
}