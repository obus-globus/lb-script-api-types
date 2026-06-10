import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { NoiseChunk$BlockStateFiller } from '../../../../../../net/minecraft/world/level/levelgen/NoiseChunk$BlockStateFiller.d.ts'
export class MaterialRuleList extends Record implements NoiseChunk$BlockStateFiller {
    // private materialRuleList: (param0: DensityFunction$FunctionContext) => BlockState[];
    calculate(context: DensityFunction$FunctionContext): BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    materialRuleList(): (param0: DensityFunction$FunctionContext) => BlockState[];
    toString(): string;
}