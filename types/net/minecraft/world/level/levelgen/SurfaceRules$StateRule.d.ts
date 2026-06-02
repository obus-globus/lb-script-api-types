import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export class SurfaceRules$StateRule extends Record implements SurfaceRules$SurfaceRule {
    private constructor(state: BlockState)
    // private state: BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    state(): BlockState;
    toString(): string;
    tryApply(blockX: number, blockY: number, blockZ: number): BlockState;
}