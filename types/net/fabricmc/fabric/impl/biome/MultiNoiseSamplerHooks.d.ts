import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ImprovedNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/ImprovedNoise.d.ts'
export interface MultiNoiseSamplerHooks extends Object{
    fabric_getEndBiomesSampler(): ImprovedNoise;
    fabric_getSeed(): number;
    fabric_setSeed(arg0: number): void;
}