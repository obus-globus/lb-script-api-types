import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { PlayerInteractItemEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerInteractItemEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { FontRenderer } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { HitResult } from '../../../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * EasyPearl module
 *
 * Throw pearl to where you are looking at.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleEasyPearl.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleEasyPearl.kt:68}
 */
export class ModuleEasyPearl extends ClientModule {
    static INSTANCE: ModuleEasyPearl;
    // private aimOffThreshold: number;
    // private /*not mapped: */ getAimOffThreshold(): number;
    readonly currentTargetRotation: Rotation | null;
    // private /*not mapped: */ getEnderPearlSlot(): HotbarItemSlot | null;
    // private /*not mapped: */ getFontRenderer(): FontRenderer;
    // private interactItemHandler: EventHook<PlayerInteractItemEvent>;
    // private overlayRenderHandler: EventHook<OverlayRenderEvent>;
    // private reachableCheck: boolean;
    // private /*not mapped: */ getReachableCheck(): boolean;
    // private rotation: RotationsValueGroup;
    // private rotationHandler: EventHook<RotationUpdateEvent>;
    // private showDistance: boolean;
    // private /*not mapped: */ getShowDistance(): boolean;
    // private targetPosition: Vec3 | null;
    // private tickHandler: EventHook<GameTickEvent>;
    // private worldRenderHandler: EventHook<WorldRenderEvent>;
    // private getPositionPlayerLookAt(partialTicks: number): HitResult;
    // private getTargetRotation(targetPosition: Vec3): Rotation | null;
    // private isHoldingPearl(): boolean;
    // private isRotationDone(targetPosition: Vec3): boolean;
    onDisabled(): void;
    // private targetColor(pos: Vec3): Color4b;
}