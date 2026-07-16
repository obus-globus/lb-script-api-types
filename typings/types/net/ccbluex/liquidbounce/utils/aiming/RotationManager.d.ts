import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MouseRotationEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MouseRotationEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerVelocityStrafe } from '../../../../../net/ccbluex/liquidbounce/event/events/PlayerVelocityStrafe.d.ts'
import type { WorldRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationTarget } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { RotationsValueGroup } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RequestHandler } from '../../../../../net/ccbluex/liquidbounce/utils/client/RequestHandler.d.ts'
import type { RestrictedSingleUseAction } from '../../../../../net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * A rotation manager
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:62}
 */
export class RotationManager extends Object implements EventListener {
    static INSTANCE: RotationManager;
    readonly activeRotationTarget: RotationTarget | null;
    /**
     * The rotation that was already sent to the server and is currently active.
     * The value is not being written by the packets, but we gather the Rotation from the last yaw and pitch variables
     * from our player instance handled by the sendMovementPackets() function.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:108}
     */
    readonly actualServerRotation: Rotation;
    /**
     * The rotation we want to aim at. This DOES NOT mean that the server already received this rotation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:79}
     */
    currentRotation: Rotation | null;
    readonly debugDisplayName: Component;
    // private /*not mapped: */ getFakeLagging(): boolean;
    // private /*not mapped: */ getFreezing(): boolean;
    // private gameTickHandler: EventHook<GameTickEvent>;
    // private mouseMovement: EventHook<MouseRotationEvent>;
    /**
     * Track rotation changes
     *
     * We cannot only rely on player.lastYaw and player.lastPitch because
     * sometimes we update the rotation off chain (e.g. on interactItem)
     * and the player.lastYaw and player.lastPitch are not updated.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L280 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:280}
     */
    readonly packetHandler: EventHook<PacketEvent>;
    playerRotation: Rotation | null;
    previousRotation: Rotation | null;
    // private previousRotationTarget: RotationTarget | null;
    /*not mapped: */ getPreviousRotationTarget$net_ccbluex_liquidbounce(): RotationTarget | null;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private /*not mapped: */ getRotationTarget(): RotationTarget | null;
    // private rotationTargetHandler: RequestHandler<RotationTarget>;
    readonly running: boolean;
    readonly serverRotation: Rotation;
    // private theoreticalServerRotation: Rotation;
    // private velocityHandler: EventHook<PlayerVelocityStrafe>;
    // private allowedToUpdate(): boolean;
    children(): EventListener[];
    /**
     * Checks if the rotation is allowed to be updated
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L145 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:145}
     */
    isRotatingAllowed(rotationTarget: RotationTarget): boolean;
    parent(): EventListener | null;
    rotationMatchesPreviousRotation(): boolean;
    /**
     * Our final target rotation. This rotation is only used to define our current rotation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:67}
     */
    setRotationTarget(plan: RotationTarget, priority: Priority, provider: ClientModule): void;
    setRotationTarget(rotation: Rotation, considerInventory: boolean, valueGroup: RotationsValueGroup, priority: Priority, provider: ClientModule, whenReached: RestrictedSingleUseAction | null): void;
    unregister(): void;
    /**
     * Update current rotation to a new rotation step
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L162 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:162}
     */
    update(): void;
}