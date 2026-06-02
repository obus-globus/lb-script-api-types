import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType$Builder } from '../../../../../../../../net/minecraft/world/entity/EntityType$Builder.d.ts'
export interface FabricEntityType$Builder<T extends Entity> extends Object{
    alwaysUpdateVelocity(arg0: boolean): EntityType$Builder<T>;
    canPotentiallyExecuteCommands(arg0: boolean): EntityType$Builder<T>;
}