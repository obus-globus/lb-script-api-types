import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { SprintEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { ModuleAutoClicker$AttackButton$ObjectiveType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoClicker$AttackButton$ObjectiveType.d.ts'
import type { ModuleAutoClicker$AttackButton$Use } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoClicker$AttackButton$Use.d.ts'
import type { ModuleCriticals$CriticalsSelectionMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals$CriticalsSelectionMode.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { WeaponType } from '../../../../../../../net/ccbluex/liquidbounce/utils/item/WeaponType.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleAutoClicker$AttackButton extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoClicker$AttackButton;
    readonly clicker: Clicker<ModuleAutoClicker$AttackButton>;
    // private criticalsSelectionMode: ModuleCriticals$CriticalsSelectionMode;
    // private /*not mapped: */ getCriticalsSelectionMode(): ModuleCriticals$CriticalsSelectionMode;
    // private delayOnBroken: boolean;
    /*not mapped: */ getDelayOnBroken$net_ccbluex_liquidbounce(): boolean;
    // private delayPostStopUse: number;
    // private /*not mapped: */ getDelayPostStopUse(): number;
    // private objectiveType: ModuleAutoClicker$AttackButton$ObjectiveType;
    // private /*not mapped: */ getObjectiveType(): ModuleAutoClicker$AttackButton$ObjectiveType;
    // private onItemUse: ModuleAutoClicker$AttackButton$Use;
    // private /*not mapped: */ getOnItemUse(): ModuleAutoClicker$AttackButton$Use;
    // private requiresNoInput: boolean;
    /*not mapped: */ getRequiresNoInput$net_ccbluex_liquidbounce(): boolean;
    // private sprintHandler: EventHook<SprintEvent>;
    // private weapon: WeaponType[];
    // private /*not mapped: */ getWeapon(): WeaponType[];
    encounterItemUse(): boolean;
    isCriticalHit(entity: Entity): boolean;
    isOnObjective(): boolean;
    isWeaponSelected(): boolean;
}