import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { NoiseRouter } from '../../../../../net/minecraft/world/level/levelgen/NoiseRouter.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class NoiseRouterData extends Object {
    static BASE_3D_NOISE_END: ResourceKey<DensityFunction>;
    static BASE_3D_NOISE_NETHER: ResourceKey<DensityFunction>;
    static BASE_3D_NOISE_OVERWORLD: ResourceKey<DensityFunction>;
    static BASE_DENSITY_MULTIPLIER: number;
    static BLENDING_FACTOR: DensityFunction;
    static BLENDING_JAGGEDNESS: DensityFunction;
    static CHEESE_NOISE_TARGET: number;
    static CONTINENTS: ResourceKey<DensityFunction>;
    static CONTINENTS_LARGE: ResourceKey<DensityFunction>;
    static DENSITY_Y_ANCHOR_BOTTOM: number;
    static DENSITY_Y_ANCHOR_TOP: number;
    static DENSITY_Y_BOTTOM: number;
    static DENSITY_Y_TOP: number;
    static DEPTH: ResourceKey<DensityFunction>;
    static DEPTH_AMPLIFIED: ResourceKey<DensityFunction>;
    static DEPTH_LARGE: ResourceKey<DensityFunction>;
    static ENTRANCES: ResourceKey<DensityFunction>;
    static EROSION: ResourceKey<DensityFunction>;
    static EROSION_LARGE: ResourceKey<DensityFunction>;
    static FACTOR: ResourceKey<DensityFunction>;
    static FACTOR_AMPLIFIED: ResourceKey<DensityFunction>;
    static FACTOR_LARGE: ResourceKey<DensityFunction>;
    static GLOBAL_OFFSET: number;
    static ISLAND_CHUNK_DISTANCE: number;
    static ISLAND_CHUNK_DISTANCE_SQR: number;
    static JAGGEDNESS: ResourceKey<DensityFunction>;
    static JAGGEDNESS_AMPLIFIED: ResourceKey<DensityFunction>;
    static JAGGEDNESS_LARGE: ResourceKey<DensityFunction>;
    static NOISE_ZERO: number;
    static NOODLE: ResourceKey<DensityFunction>;
    static NOODLE_SPACING_AND_STRAIGHTNESS: number;
    static OFFSET: ResourceKey<DensityFunction>;
    static OFFSET_AMPLIFIED: ResourceKey<DensityFunction>;
    static OFFSET_LARGE: ResourceKey<DensityFunction>;
    static ORE_THICKNESS: number;
    static OVERWORLD_BOTTOM_SLIDE_HEIGHT: number;
    static PILLARS: ResourceKey<DensityFunction>;
    static RIDGES: ResourceKey<DensityFunction>;
    static RIDGES_FOLDED: ResourceKey<DensityFunction>;
    static SHIFT_X: ResourceKey<DensityFunction>;
    static SHIFT_Z: ResourceKey<DensityFunction>;
    static SLOPED_CHEESE: ResourceKey<DensityFunction>;
    static SLOPED_CHEESE_AMPLIFIED: ResourceKey<DensityFunction>;
    static SLOPED_CHEESE_END: ResourceKey<DensityFunction>;
    static SLOPED_CHEESE_LARGE: ResourceKey<DensityFunction>;
    static SPAGHETTI_2D: ResourceKey<DensityFunction>;
    static SPAGHETTI_2D_THICKNESS_MODULATOR: ResourceKey<DensityFunction>;
    static SPAGHETTI_ROUGHNESS_FUNCTION: ResourceKey<DensityFunction>;
    static SURFACE_DENSITY_THRESHOLD: number;
    static VEININESS_FREQUENCY: number;
    static Y: ResourceKey<DensityFunction>;
    static ZERO: ResourceKey<DensityFunction>;
    static bootstrap(paramcontext: BootstrapContext<DensityFunction>): Holder<DensityFunction>;
    static caves(paramfunctions: HolderGetter<DensityFunction>): NoiseRouter;
    static end(paramfunctions: HolderGetter<DensityFunction>): NoiseRouter;
    static entrances(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>): DensityFunction;
    static floatingIslands(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>): NoiseRouter;
    static getFunction(paramfunctions: HolderGetter<DensityFunction>, paramname: ResourceKey<DensityFunction>): DensityFunction;
    static nether(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>): NoiseRouter;
    static noiseGradientDensity(paramfactor: DensityFunction, paramdepthWithJaggedness: DensityFunction): DensityFunction;
    static none(): NoiseRouter;
    static noodle(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>): DensityFunction;
    static offsetToDepth(paramoffset: DensityFunction): DensityFunction;
    static overworld(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>, paramlargeBiomes: boolean, paramamplified: boolean): NoiseRouter;
    static peaksAndValleys(paramweirdness: number): number;
    static peaksAndValleys(paramweirdness: DensityFunction): DensityFunction;
    static pillars(paramnoises: HolderGetter<NormalNoise$NoiseParameters>): DensityFunction;
    static postProcess(paramslide: DensityFunction): DensityFunction;
    static preliminarySurfaceLevel(paramoffset: DensityFunction, paramfactor: DensityFunction, paramamplified: boolean): DensityFunction;
    static registerAndWrap(paramcontext: BootstrapContext<DensityFunction>, paramname: ResourceKey<DensityFunction>, paramvalue: DensityFunction): DensityFunction;
    static registerTerrainNoises(paramcontext: BootstrapContext<DensityFunction>, paramfunctions: HolderGetter<DensityFunction>, paramjaggedNoise: DensityFunction, paramcontinentsFunction: Holder<DensityFunction>, paramerosionFunction: Holder<DensityFunction>, paramoffsetName: ResourceKey<DensityFunction>, paramfactorName: ResourceKey<DensityFunction>, paramjaggednessName: ResourceKey<DensityFunction>, paramdepthName: ResourceKey<DensityFunction>, paramslopedCheeseName: ResourceKey<DensityFunction>, paramamplified: boolean): void;
    static remap(paraminput: DensityFunction, paramfromMin: number, paramfromMax: number, paramtoMin: number, paramtoMax: number): DensityFunction;
    static simpleRouter(paramfullNoise: DensityFunction): NoiseRouter;
    static slide(paramcaves: DensityFunction, paramminY: number, paramheight: number, paramtopStartY: number, paramtopEndY: number, paramtopTarget: number, parambottomStartY: number, parambottomEndY: number, parambottomTarget: number): DensityFunction;
    static slideEnd(paramcaves: DensityFunction): DensityFunction;
    static slideEndLike(paramcaves: DensityFunction, paramminY: number, paramheight: number): DensityFunction;
    static slideNetherLike(paramfunctions: HolderGetter<DensityFunction>, paramminY: number, paramheight: number): DensityFunction;
    static slideOverworld(paramisAmplified: boolean, paramcaves: DensityFunction): DensityFunction;
    static spaghetti2D(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>): DensityFunction;
    static spaghettiRoughnessFunction(paramnoises: HolderGetter<NormalNoise$NoiseParameters>): DensityFunction;
    static splineWithBlending(paramspline: DensityFunction, paramblendingTarget: DensityFunction): DensityFunction;
    static underground(paramfunctions: HolderGetter<DensityFunction>, paramnoises: HolderGetter<NormalNoise$NoiseParameters>, paramslopedCheese: DensityFunction): DensityFunction;
    static yLimitedInterpolatable(paramy: DensityFunction, paramwhenInRange: DensityFunction, paramminYInclusive: number, parammaxYInclusive: number, paramwhenOutOfRange: number): DensityFunction;
    constructor()
}