import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
export interface DensityFunction$FunctionContext extends Object{
    blockX(): number;
    blockY(): number;
    blockZ(): number;
    getBlender(): Blender;
}