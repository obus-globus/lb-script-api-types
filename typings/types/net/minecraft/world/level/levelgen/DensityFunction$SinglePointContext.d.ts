import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
export class DensityFunction$SinglePointContext extends Record implements DensityFunction$FunctionContext {
    // private blockX: number;
    // private blockY: number;
    // private blockZ: number;
    blockX(): number;
    blockY(): number;
    blockZ(): number;
    equals(o: Object | null): boolean;
    getBlender(): Blender;
    hashCode(): number;
    toString(): string;
}