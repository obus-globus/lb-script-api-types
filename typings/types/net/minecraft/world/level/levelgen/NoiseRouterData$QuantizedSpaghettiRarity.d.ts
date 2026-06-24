import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class NoiseRouterData$QuantizedSpaghettiRarity extends Object {
    static wrapRarity2d(paraminput: DensityFunction, paramnoise: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    static wrapRarity3d(paraminput: DensityFunction, paramnoise: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    constructor()
}