import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export class SurfaceRules$TestRule extends Record implements SurfaceRules$SurfaceRule {
    private constructor(condition: SurfaceRules$Condition, followup: SurfaceRules$SurfaceRule)
    // private condition: SurfaceRules$Condition;
    // private followup: SurfaceRules$SurfaceRule;
    condition(): SurfaceRules$Condition;
    equals(o: Object | null): boolean;
    followup(): SurfaceRules$SurfaceRule;
    hashCode(): number;
    toString(): string;
    tryApply(blockX: number, blockY: number, blockZ: number): BlockState;
}