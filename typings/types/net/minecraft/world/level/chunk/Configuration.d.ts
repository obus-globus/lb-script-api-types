import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export interface Configuration extends Object{
    alwaysRepack(): boolean;
    bitsInMemory(): number;
    bitsInStorage(): number;
    createPalette<T extends Object | number | string | boolean>(strategy: Strategy<T>, paletteEntries: T[]): Palette<T>;
}