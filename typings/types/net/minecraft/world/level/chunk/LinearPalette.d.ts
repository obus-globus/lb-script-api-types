import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { PaletteResize } from '../../../../../net/minecraft/world/level/chunk/PaletteResize.d.ts'
export class LinearPalette<T extends unknown> extends Object implements Palette<T> {
    static create(parambits: number, parampaletteEntries: (Object | null)[]): Palette<Object>;
    private constructor(values: T[], bits: number, size: number)
    private constructor(bits: number, paletteEntries: T[])
    // private bits: number;
    readonly size: number;
    // private values: T[];
    copy(): Palette<T>;
    getSerializedSize(globalMap: T[]): number;
    getSize(): number;
    idFor(value: T, resizeHandler: PaletteResize<T>): number;
    maybeHas(predicate: (param0: T) => boolean): boolean;
    read(buffer: FriendlyByteBuf, globalMap: T[]): void;
    valueFor(index: number): T;
    write(buffer: FriendlyByteBuf, globalMap: T[]): void;
}