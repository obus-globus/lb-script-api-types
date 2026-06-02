import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderGetter$Provider } from '../../../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { NoiseGeneratorSettings } from '../../../../../net/minecraft/world/level/levelgen/NoiseGeneratorSettings.d.ts'
import type { NoiseRouter } from '../../../../../net/minecraft/world/level/levelgen/NoiseRouter.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
import type { SurfaceSystem } from '../../../../../net/minecraft/world/level/levelgen/SurfaceSystem.d.ts'
import type { NormalNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class RandomState extends Object {
    static create(paramholders: HolderGetter$Provider, paramnoiseSettings: ResourceKey<NoiseGeneratorSettings>, paramseed: number): RandomState;
    static create(paramsettings: NoiseGeneratorSettings, paramnoises: HolderGetter<NormalNoise$NoiseParameters>, paramseed: number): RandomState;
    private constructor(settings: NoiseGeneratorSettings, noises: HolderGetter<NormalNoise$NoiseParameters>, seed: number)
    // private aquiferRandom: PositionalRandomFactory;
    // private noiseIntances: Map<ResourceKey<NormalNoise$NoiseParameters>, NormalNoise>;
    // private noises: HolderGetter<NormalNoise$NoiseParameters>;
    // private oreRandom: PositionalRandomFactory;
    // private positionalRandoms: Map<Identifier, PositionalRandomFactory>;
    // private random: PositionalRandomFactory;
    // private router: NoiseRouter;
    // private sampler: Climate$Sampler;
    // private surfaceSystem: SurfaceSystem;
    aquiferRandom(): PositionalRandomFactory;
    getOrCreateNoise(noise: ResourceKey<NormalNoise$NoiseParameters>): NormalNoise;
    getOrCreateRandomFactory(name: Identifier): PositionalRandomFactory;
    oreRandom(): PositionalRandomFactory;
    router(): NoiseRouter;
    sampler(): Climate$Sampler;
    surfaceSystem(): SurfaceSystem;
}