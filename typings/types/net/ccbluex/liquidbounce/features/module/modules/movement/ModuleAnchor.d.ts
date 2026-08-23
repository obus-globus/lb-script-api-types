import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { HoleManagerSubscriber } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/hole/HoleManagerSubscriber.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Module Anchor
 *
 * Pulls you into safe holes.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAnchor.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAnchor.kt:48}
 */
export class ModuleAnchor extends ClientModule implements HoleManagerSubscriber {
    static INSTANCE: ModuleAnchor;
    goal: Vec3 | null;
    // private horizontalSpeed: number;
    // private /*not mapped: */ getHorizontalSpeed(): number;
    // private maxDistance: number;
    // private /*not mapped: */ getMaxDistance(): number;
    // private moveHandler: EventHook<PlayerMoveEvent>;
    readonly running: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private verticalSpeed: number;
    // private /*not mapped: */ getVerticalSpeed(): number;
    horizontalDistance(): number;
    // private modifyHorizontalSpeed(event: PlayerMoveEvent, delta: Vec3, goal: Vec3): void;
    // private modifyVerticalSpeed(event: PlayerMoveEvent, delta: Vec3): void;
    onDisabled(): void;
    onEnabled(): void;
    verticalDistance(): number;
}