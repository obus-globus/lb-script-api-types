import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
import type { NormalNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class Noises extends Object {
    static AQUIFER_BARRIER: ResourceKey<NormalNoise$NoiseParameters>;
    static AQUIFER_FLUID_LEVEL_FLOODEDNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static AQUIFER_FLUID_LEVEL_SPREAD: ResourceKey<NormalNoise$NoiseParameters>;
    static AQUIFER_LAVA: ResourceKey<NormalNoise$NoiseParameters>;
    static BADLANDS_PILLAR: ResourceKey<NormalNoise$NoiseParameters>;
    static BADLANDS_PILLAR_ROOF: ResourceKey<NormalNoise$NoiseParameters>;
    static BADLANDS_SURFACE: ResourceKey<NormalNoise$NoiseParameters>;
    static CALCITE: ResourceKey<NormalNoise$NoiseParameters>;
    static CAVE_CHEESE: ResourceKey<NormalNoise$NoiseParameters>;
    static CAVE_ENTRANCE: ResourceKey<NormalNoise$NoiseParameters>;
    static CAVE_LAYER: ResourceKey<NormalNoise$NoiseParameters>;
    static CLAY_BANDS_OFFSET: ResourceKey<NormalNoise$NoiseParameters>;
    static CONTINENTALNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static CONTINENTALNESS_LARGE: ResourceKey<NormalNoise$NoiseParameters>;
    static EROSION: ResourceKey<NormalNoise$NoiseParameters>;
    static EROSION_LARGE: ResourceKey<NormalNoise$NoiseParameters>;
    static GRAVEL: ResourceKey<NormalNoise$NoiseParameters>;
    static GRAVEL_LAYER: ResourceKey<NormalNoise$NoiseParameters>;
    static ICE: ResourceKey<NormalNoise$NoiseParameters>;
    static ICEBERG_PILLAR: ResourceKey<NormalNoise$NoiseParameters>;
    static ICEBERG_PILLAR_ROOF: ResourceKey<NormalNoise$NoiseParameters>;
    static ICEBERG_SURFACE: ResourceKey<NormalNoise$NoiseParameters>;
    static JAGGED: ResourceKey<NormalNoise$NoiseParameters>;
    static NETHERRACK: ResourceKey<NormalNoise$NoiseParameters>;
    static NETHER_STATE_SELECTOR: ResourceKey<NormalNoise$NoiseParameters>;
    static NETHER_WART: ResourceKey<NormalNoise$NoiseParameters>;
    static NOODLE: ResourceKey<NormalNoise$NoiseParameters>;
    static NOODLE_RIDGE_A: ResourceKey<NormalNoise$NoiseParameters>;
    static NOODLE_RIDGE_B: ResourceKey<NormalNoise$NoiseParameters>;
    static NOODLE_THICKNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static ORE_GAP: ResourceKey<NormalNoise$NoiseParameters>;
    static ORE_VEININESS: ResourceKey<NormalNoise$NoiseParameters>;
    static ORE_VEIN_A: ResourceKey<NormalNoise$NoiseParameters>;
    static ORE_VEIN_B: ResourceKey<NormalNoise$NoiseParameters>;
    static PACKED_ICE: ResourceKey<NormalNoise$NoiseParameters>;
    static PATCH: ResourceKey<NormalNoise$NoiseParameters>;
    static PILLAR: ResourceKey<NormalNoise$NoiseParameters>;
    static PILLAR_RARENESS: ResourceKey<NormalNoise$NoiseParameters>;
    static PILLAR_THICKNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static POWDER_SNOW: ResourceKey<NormalNoise$NoiseParameters>;
    static RIDGE: ResourceKey<NormalNoise$NoiseParameters>;
    static SHIFT: ResourceKey<NormalNoise$NoiseParameters>;
    static SOUL_SAND_LAYER: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_2D: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_2D_ELEVATION: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_2D_MODULATOR: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_2D_THICKNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_3D_1: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_3D_2: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_3D_RARITY: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_3D_THICKNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_ROUGHNESS: ResourceKey<NormalNoise$NoiseParameters>;
    static SPAGHETTI_ROUGHNESS_MODULATOR: ResourceKey<NormalNoise$NoiseParameters>;
    static SULFUR_CAVE_GRADIENT: ResourceKey<NormalNoise$NoiseParameters>;
    static SURFACE: ResourceKey<NormalNoise$NoiseParameters>;
    static SURFACE_SECONDARY: ResourceKey<NormalNoise$NoiseParameters>;
    static SWAMP: ResourceKey<NormalNoise$NoiseParameters>;
    static TEMPERATURE: ResourceKey<NormalNoise$NoiseParameters>;
    static TEMPERATURE_LARGE: ResourceKey<NormalNoise$NoiseParameters>;
    static TEMPERATURE_NETHER: ResourceKey<NormalNoise$NoiseParameters>;
    static VEGETATION: ResourceKey<NormalNoise$NoiseParameters>;
    static VEGETATION_LARGE: ResourceKey<NormalNoise$NoiseParameters>;
    static VEGETATION_NETHER: ResourceKey<NormalNoise$NoiseParameters>;
    static instantiate(paramnoises: HolderGetter<NormalNoise$NoiseParameters>, paramcontext: PositionalRandomFactory, paramname: ResourceKey<NormalNoise$NoiseParameters>): NormalNoise;
    constructor()
}