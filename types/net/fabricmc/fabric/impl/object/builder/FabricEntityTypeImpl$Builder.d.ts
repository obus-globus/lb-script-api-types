import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeImpl$Builder$Living } from '../../../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl$Builder$Living.d.ts'
import type { FabricEntityTypeImpl$Builder$Mob } from '../../../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl$Builder$Mob.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
export interface FabricEntityTypeImpl$Builder extends Object{
    fabric_setLivingEntityBuilder(arg0: FabricEntityTypeImpl$Builder$Living<LivingEntity>): void;
    fabric_setMobEntityBuilder(arg0: FabricEntityTypeImpl$Builder$Mob<Mob>): void;
}