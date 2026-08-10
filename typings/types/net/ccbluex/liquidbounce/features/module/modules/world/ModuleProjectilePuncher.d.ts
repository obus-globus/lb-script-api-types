import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { SwingMode } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * ProjectilePuncher module
 *
 * Shoots back incoming projectiles around you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleProjectilePuncher.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleProjectilePuncher.kt:50}
 */
export class ModuleProjectilePuncher extends ClientModule {
    static INSTANCE: ModuleProjectilePuncher;
    // private clicker: Clicker<ModuleProjectilePuncher>;
    // private ignoreOpenInventory: boolean;
    // private /*not mapped: */ getIgnoreOpenInventory(): boolean;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    /**
     * Tries to punch the current projectile target when it is in range and the server-side rotation already faces it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleProjectilePuncher.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleProjectilePuncher.kt:83}
     */
    readonly repeatable: EventHook<GameTickEvent>;
    // private rotations: RotationsValueGroup;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private target: Entity | null;
    readonly tickHandler: EventHook<RotationUpdateEvent>;
    onDisabled(): void;
    // private shouldAttack(entity: Entity): boolean;
    // private updateTarget(): void;
}