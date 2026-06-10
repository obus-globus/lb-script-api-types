import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
export interface Palette$Factory extends Object{
    create<A extends Object | number | string | boolean>(bits: number, paletteEntries: A[]): Palette<A>;
}