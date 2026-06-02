import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectType } from '../../../../net/minecraft/world/entity/InsideBlockEffectType.d.ts'
export interface InsideBlockEffectApplier extends Object{
    apply(type: InsideBlockEffectType): void;
    runAfter(type: InsideBlockEffectType, effect: (param0: Entity) => void): void;
    runBefore(type: InsideBlockEffectType, effect: (param0: Entity) => void): void;
}