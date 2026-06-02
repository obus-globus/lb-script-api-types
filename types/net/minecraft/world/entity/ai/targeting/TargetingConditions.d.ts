import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
export class TargetingConditions extends Object {
    static DEFAULT: TargetingConditions;
    static forCombat(): TargetingConditions;
    static forNonCombat(): TargetingConditions;
    private constructor(isCombat: boolean)
    // private checkLineOfSight: boolean;
    // private isCombat: boolean;
    // private range: number;
    // private selector: (param0: LivingEntity, param1: ServerLevel) => kotlin.Boolean;
    // private testInvisible: boolean;
    copy(): TargetingConditions;
    ignoreInvisibilityTesting(): TargetingConditions;
    ignoreLineOfSight(): TargetingConditions;
    range(range: number): TargetingConditions;
    selector(selector: (param0: LivingEntity, param1: ServerLevel) => kotlin.Boolean): TargetingConditions;
    test(level: ServerLevel, targeter: LivingEntity, target: LivingEntity): boolean;
}