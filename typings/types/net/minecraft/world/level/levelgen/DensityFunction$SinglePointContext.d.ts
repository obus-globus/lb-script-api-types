import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
export class DensityFunction$SinglePointContext extends Record implements DensityFunction$FunctionContext {
    constructor(blockX: number, blockY: number, blockZ: number)
    // private blockX: number;
    // private blockY: number;
    // private blockZ: number;
    blockX(): number;
    blockY(): number;
    blockZ(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}