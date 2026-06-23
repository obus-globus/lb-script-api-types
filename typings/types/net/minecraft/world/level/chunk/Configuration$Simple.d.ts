import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../net/minecraft/world/level/chunk/Configuration.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { Palette$Factory } from '../../../../../net/minecraft/world/level/chunk/Palette$Factory.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export class Configuration$Simple extends Record implements Configuration {
    // private bits: number;
    // private factory: Palette$Factory;
    alwaysRepack(): boolean;
    bits(): number;
    bitsInMemory(): number;
    bitsInStorage(): number;
    createPalette<T extends unknown>(strategy: Strategy<T>, paletteEntries: T[]): Palette<T>;
    equals(o: Object | null): boolean;
    factory(): Palette$Factory;
    hashCode(): number;
    toString(): string;
}