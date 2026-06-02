import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class NoiseData extends Object {
    static DEFAULT_SHIFT: NormalNoise$NoiseParameters;
    static bootstrap(paramcontext: BootstrapContext<NormalNoise$NoiseParameters>): void;
    constructor()
}