import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface StartAttacking$StartAttackingCondition<E extends Object | number | string | boolean> extends Object{
    test(level: ServerLevel, body: E): boolean;
}