import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { PaletteResize } from '../../../../../net/minecraft/world/level/chunk/PaletteResize.d.ts'
export interface Palette<T extends Object | number | string | boolean> extends Object {
    copy(): Palette<T>;
    getSerializedSize(globalMap: T[]): number;
    getSize(): number;
    idFor(value: T, resizeHandler: PaletteResize<T>): number;
    maybeHas(predicate: (param0: T) => kotlin.Boolean): boolean;
    read(buffer: FriendlyByteBuf, globalMap: T[]): void;
    valueFor(index: number): T;
    write(buffer: FriendlyByteBuf, globalMap: T[]): void;
}