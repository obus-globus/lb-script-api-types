import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { SprintEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleCriticals$CriticalsSelectionMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals$CriticalsSelectionMode.d.ts'
import type { KillAuraClicker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.d.ts'
import type { KillAuraRequirements } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRequirements.d.ts'
import type { KillAuraRotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRotationsValueGroup.d.ts'
import type { KillAuraTargetTracker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraTargetTracker.d.ts'
import type { ModuleKillAura$RaycastMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/ModuleKillAura$RaycastMode.d.ts'
import type { KillAuraRange } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationWithVector } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
import type { PointTracker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointTracker.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * KillAura module
 *
 * Automatically attacks enemies.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/ModuleKillAura.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/ModuleKillAura.kt:83}
 */
export class ModuleKillAura extends ClientModule {
    static INSTANCE: ModuleKillAura;
    readonly clicker: KillAuraClicker;
    // private criticalsSelectionMode: ModuleCriticals$CriticalsSelectionMode;
    // private /*not mapped: */ getCriticalsSelectionMode(): ModuleCriticals$CriticalsSelectionMode;
    // private gameHandler: EventHook<GameTickEvent>;
    // private ignoreOpenInventory: boolean;
    /*not mapped: */ getIgnoreOpenInventory$net_ccbluex_liquidbounce(): boolean;
    // private keepSprint: boolean;
    // private /*not mapped: */ getKeepSprint(): boolean;
    // private pointTracker: PointTracker;
    readonly range: KillAuraRange;
    // private raycast: ModuleKillAura$RaycastMode;
    /*not mapped: */ getRaycast$net_ccbluex_liquidbounce(): ModuleKillAura$RaycastMode;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private /*not mapped: */ getRequirementsMet(): boolean;
    // private requires: KillAuraRequirements[];
    // private /*not mapped: */ getRequires(): KillAuraRequirements[];
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: KillAuraRotationsValueGroup;
    readonly shouldBlockSprinting: boolean;
    // private simulateInventoryClosing: boolean;
    /*not mapped: */ getSimulateInventoryClosing$net_ccbluex_liquidbounce(): boolean;
    // private sprintHandler: EventHook<SprintEvent>;
    readonly targetTracker: KillAuraTargetTracker;
    // private waitTicks: number;
    /*not mapped: */ getWaitTicks$net_ccbluex_liquidbounce(): number;
    // private attackTarget(target: Entity, rotation: Rotation): void;
    /**
     * Check if we can attack the target at the current moment
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/ModuleKillAura.kt#L431 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/ModuleKillAura.kt:431}
     */
    canAttackNow(target: Entity | null, itemStack: ItemStack): boolean;
    // private findRotation(entity: Entity, range: number, wallsRange: number): RotationWithVector | null;
    onDisabled(): void;
    // private processTarget(entity: LivingEntity, range: number, wallsRange: number): boolean;
    // private updateTarget(): void;
}