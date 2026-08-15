import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { TagEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTeams$ColorSource } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams$ColorSource.d.ts'
import type { ModuleTeams$Matches } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams$Matches.d.ts'
import type { EquipmentSlotChoice } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/EquipmentSlotChoice.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Teams module
 *
 * Prevents KillAura from attacking teammates.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:43}
 */
export class ModuleTeams extends ClientModule {
    static INSTANCE: ModuleTeams;
    // private armorColorSlots: EquipmentSlotChoice[];
    // private /*not mapped: */ getArmorColorSlots(): EquipmentSlotChoice[];
    // private colorSources: ModuleTeams$ColorSource[];
    // private /*not mapped: */ getColorSources(): ModuleTeams$ColorSource[];
    // private entityTagEvent: EventHook<TagEntityEvent>;
    // private matches: ModuleTeams$Matches[];
    // private /*not mapped: */ getMatches(): ModuleTeams$Matches[];
    // private checkArmor(entity: LivingEntity): boolean;
    // private isInClientPlayersTeam(entity: LivingEntity): boolean;
}