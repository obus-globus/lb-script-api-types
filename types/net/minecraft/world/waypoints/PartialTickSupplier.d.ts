import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export interface PartialTickSupplier extends Object{
    apply(entity: Entity): number;
}