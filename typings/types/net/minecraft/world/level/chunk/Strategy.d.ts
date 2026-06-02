import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrategyAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/StrategyAccessor.d.ts'
import type { Configuration } from '../../../../../net/minecraft/world/level/chunk/Configuration.d.ts'
import type { GlobalPalette } from '../../../../../net/minecraft/world/level/chunk/GlobalPalette.d.ts'
import type { Palette$Factory } from '../../../../../net/minecraft/world/level/chunk/Palette$Factory.d.ts'
export abstract class Strategy<T extends Object | number | string | boolean> extends Object implements StrategyAccessor {
    static LINEAR_PALETTE_FACTORY: Palette$Factory;
    static SINGLE_VALUE_PALETTE_FACTORY: Palette$Factory;
    static createForBiomes(paramregistry: T[]): Strategy<Object>;
    static createForBlockStates(paramregistry: T[]): Strategy<Object>;
    private constructor(globalMap: T[], bitsPerAxis: number)
    // private bitsPerAxis: number;
    // private entryCount: number;
    // private globalMap: T[];
    // private globalPalette: GlobalPalette<T>;
    // private globalPaletteBitsInMemory: number;
    entryCount(): number;
    getConfigurationForBitCount(entryBits: number): Configuration;
    getConfigurationForPaletteSize(paletteSize: number): Configuration;
    getIndex(x: number, y: number, z: number): number;
    globalMap(): T[];
    globalPalette(): GlobalPalette<T>;
}