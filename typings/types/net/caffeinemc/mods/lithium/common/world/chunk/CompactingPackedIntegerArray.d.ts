import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Palette } from '../../../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
export interface CompactingPackedIntegerArray extends Object{
    lithium$compact<T extends Object | number | string | boolean>(arg0: Palette<T>, arg1: Palette<T>, arg2: number[]): void;
}