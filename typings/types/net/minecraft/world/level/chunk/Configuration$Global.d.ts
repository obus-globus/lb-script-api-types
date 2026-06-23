import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../net/minecraft/world/level/chunk/Configuration.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export class Configuration$Global extends Record implements Configuration {
    // private bitsInMemory: number;
    // private bitsInStorage: number;
    alwaysRepack(): boolean;
    bitsInMemory(): number;
    bitsInStorage(): number;
    createPalette<T extends unknown>(strategy: Strategy<T>, paletteEntries: T[]): Palette<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}