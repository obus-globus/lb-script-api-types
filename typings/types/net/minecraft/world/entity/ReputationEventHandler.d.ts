import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ReputationEventType } from '../../../../net/minecraft/world/entity/ai/village/ReputationEventType.d.ts'
export interface ReputationEventHandler extends Object{
    onReputationEventFrom(type: ReputationEventType, source: Entity): void;
}