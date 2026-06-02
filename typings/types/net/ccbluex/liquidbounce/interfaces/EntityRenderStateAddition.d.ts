import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export interface EntityRenderStateAddition extends Object{
    liquid_bounce$getEntity(): Entity;
    liquid_bounce$isCustom(): boolean;
    liquid_bounce$setCustom(arg0: boolean): void;
    liquid_bounce$setEntity(arg0: Entity): void;
}