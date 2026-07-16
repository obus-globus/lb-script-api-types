import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoShoot$GravityType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot$GravityType.d.ts'
import type { ModuleAutoShoot$ThrowableTypeMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot$ThrowableTypeMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { PointTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointTracker.d.ts'
import type { SwingMode } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { TargetTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * A module that automatically shoots at the nearest enemy.
 *
 * Specifically designed for Hypixel QuakeCraft.
 * However, I mostly have tested them for other game modes such as Cytooxien Lasertag and Paintball.
 *
 * It also replaces our AutoBalls module as it is more accurate.
 *
 * @author 1zuna
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot.kt:68}
 */
export class ModuleAutoShoot extends ClientModule {
    static INSTANCE: ModuleAutoShoot;
    // private aimOffThreshold: number;
    // private /*not mapped: */ getAimOffThreshold(): number;
    // private clicker: Clicker<ModuleAutoShoot>;
    // private considerInventory: boolean;
    // private /*not mapped: */ getConsiderInventory(): boolean;
    readonly constantLag: boolean;
    // private gravityType: ModuleAutoShoot$GravityType;
    // private /*not mapped: */ getGravityType(): ModuleAutoShoot$GravityType;
    // private handleAutoShoot: EventHook<GameTickEvent>;
    // private notDuringCombat: boolean;
    // private /*not mapped: */ getNotDuringCombat(): boolean;
    // private pointTracker: PointTracker;
    // private requiresKillAura: boolean;
    // private /*not mapped: */ getRequiresKillAura(): boolean;
    // private rotations: RotationsValueGroup;
    // private selectSlotAutomatically: boolean;
    // private /*not mapped: */ getSelectSlotAutomatically(): boolean;
    // private simulatedTickHandler: EventHook<RotationUpdateEvent>;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private targetTracker: TargetTracker;
    /*not mapped: */ getTargetTracker$net_ccbluex_liquidbounce(): TargetTracker;
    // private throwableType: ModeValueGroup<ModuleAutoShoot$ThrowableTypeMode>;
    // private tickUntilReset: number;
    // private /*not mapped: */ getTickUntilReset(): number;
    // private getRotation(target: LivingEntity, slot: HotbarItemSlot): Rotation | null;
    // private getThrowableSlot(): HotbarItemSlot | null;
    onDisabled(): void;
    // private shouldPauseForKillAura(): boolean;
}