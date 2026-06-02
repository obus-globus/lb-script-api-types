import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export interface EntityType$EntityFactory<T extends Entity> extends Object{
    create(entityType: EntityType<T>, level: Level): T;
}