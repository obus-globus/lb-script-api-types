import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { NoiseRouter } from '../../../../../net/minecraft/world/level/levelgen/NoiseRouter.d.ts'
import type { NoiseSettings } from '../../../../../net/minecraft/world/level/levelgen/NoiseSettings.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { WorldgenRandom$Algorithm } from '../../../../../net/minecraft/world/level/levelgen/WorldgenRandom$Algorithm.d.ts'
export class NoiseGeneratorSettings extends Record {
    static AMPLIFIED: ResourceKey<NoiseGeneratorSettings>;
    static CAVES: ResourceKey<NoiseGeneratorSettings>;
    static CODEC: Codec<Holder<NoiseGeneratorSettings>>;
    static DIRECT_CODEC: Codec<NoiseGeneratorSettings>;
    static END: ResourceKey<NoiseGeneratorSettings>;
    static FLOATING_ISLANDS: ResourceKey<NoiseGeneratorSettings>;
    static LARGE_BIOMES: ResourceKey<NoiseGeneratorSettings>;
    static NETHER: ResourceKey<NoiseGeneratorSettings>;
    static OVERWORLD: ResourceKey<NoiseGeneratorSettings>;
    static bootstrap(paramcontext: BootstrapContext<NoiseGeneratorSettings>): void;
    static dummy(): NoiseGeneratorSettings;
    constructor(noiseSettings: NoiseSettings, defaultBlock: BlockState, defaultFluid: BlockState, noiseRouter: NoiseRouter, surfaceRule: SurfaceRules$RuleSource, spawnTarget: Climate$ParameterPoint[], seaLevel: number, disableMobGeneration: boolean, aquifersEnabled: boolean, oreVeinsEnabled: boolean, useLegacyRandomSource: boolean)
    // private defaultBlock: BlockState;
    // private defaultFluid: BlockState;
    // private disableMobGeneration: boolean;
    // private noiseRouter: NoiseRouter;
    // private noiseSettings: NoiseSettings;
    // private oreVeinsEnabled: boolean;
    // private seaLevel: number;
    // private spawnTarget: Climate$ParameterPoint[];
    // private surfaceRule: SurfaceRules$RuleSource;
    // private useLegacyRandomSource: boolean;
    aquifersEnabled(): boolean;
    defaultBlock(): BlockState;
    defaultFluid(): BlockState;
    disableMobGeneration(): boolean;
    equals(o: Object | null): boolean;
    getRandomSource(): WorldgenRandom$Algorithm;
    hashCode(): number;
    isAquifersEnabled(): boolean;
    noiseRouter(): NoiseRouter;
    noiseSettings(): NoiseSettings;
    oreVeinsEnabled(): boolean;
    seaLevel(): number;
    spawnTarget(): Climate$ParameterPoint[];
    surfaceRule(): SurfaceRules$RuleSource;
    toString(): string;
    useLegacyRandomSource(): boolean;
}