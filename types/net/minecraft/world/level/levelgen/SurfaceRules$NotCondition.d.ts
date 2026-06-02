import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
export class SurfaceRules$NotCondition extends Record implements SurfaceRules$Condition {
    private constructor(target: SurfaceRules$Condition)
    // private target: SurfaceRules$Condition;
    equals(o: Object | null): boolean;
    hashCode(): number;
    target(): SurfaceRules$Condition;
    test(): boolean;
    toString(): string;
}