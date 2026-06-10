import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerEntityEvents$AllowLoad } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents$AllowLoad.d.ts'
import type { ServerEntityEvents$EquipmentChange } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents$EquipmentChange.d.ts'
import type { ServerEntityEvents$Load } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents$Load.d.ts'
import type { ServerEntityEvents$Unload } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents$Unload.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ServerEntityEvents extends Object {
    static ALLOW_LOAD: Event<(param0: Entity, param1: ServerLevel, param2: EntitySpawnReason, param3: boolean) => boolean>;
    static ENTITY_LOAD: Event<(param0: Entity, param1: ServerLevel) => void>;
    static ENTITY_UNLOAD: Event<(param0: Entity, param1: ServerLevel) => void>;
    static EQUIPMENT_CHANGE: Event<(param0: LivingEntity, param1: EquipmentSlot, param2: ItemStack, param3: ItemStack) => void>;
    private constructor()
}