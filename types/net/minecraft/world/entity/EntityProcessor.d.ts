import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export interface EntityProcessor extends Object{
    process(input: Entity): Entity;
}