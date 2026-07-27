import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MouseRotationEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MouseRotationEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerVelocityStrafe } from '../../../../../net/ccbluex/liquidbounce/event/events/PlayerVelocityStrafe.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:65}
 */
export class RotationManager extends Object implements EventListener {
    static INSTANCE: RotationManager;
    readonly activeRotationTarget: RotationTarget | null;
    /**
     * The rotation that was already sent to the server and is currently active.
     * The value is not being written by the packets, but we gather the Rotation from the last yaw and pitch variables
     * from our player instance handled by the sendMovementPackets() function.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:118}
     */
    readonly actualServerRotation: Rotation;
    /**
     * The rotation we want to aim at. This DOES NOT mean that the server already received this rotation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:87}
     */
    readonly currentRotation: Rotation | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private /*not mapped: */ getFakeLagging(): boolean;
    // private /*not mapped: */ getFreezing(): boolean;
    // private gameTickHandler: EventHook<GameTickEvent>;
    // private lifecycleListener: EventListener;
    // private mouseMovement: EventHook<MouseRotationEvent>;
    /**
     * Track rotation changes
     *
     * We cannot only rely on player.lastYaw and player.lastPitch because
     * sometimes we update the rotation off chain (e.g. on interactItem)
     * and the player.lastYaw and player.lastPitch are not updated.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L326 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:326}
     */
    readonly packetHandler: EventHook<PacketEvent>;
    readonly playerRotation: Rotation | null;
    readonly previousRotation: Rotation | null;
    // private previousRotationTarget: RotationTarget | null;
    /*not mapped: */ getPreviousRotationTarget$net_ccbluex_liquidbounce(): RotationTarget | null;
    // private /*not mapped: */ getRotationTarget(): RotationTarget | null;
    // private rotationTargetHandler: RequestHandler<RotationTarget>;
    readonly running: boolean;
    readonly serverRotation: Rotation;
    // private theoreticalServerRotation: Rotation;
    // private velocityHandler: EventHook<PlayerVelocityStrafe>;
    // private allowedToUpdate(): boolean;
    applyChangeLookRotation(partialTicks: number): void;
    children(): EventListener[];
    // private clientboundRotation(yaw: number, pitch: number, relativeYaw: boolean, relativePitch: boolean): Rotation;
    /**
     * Checks if the rotation is allowed to be updated
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L195 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:195}
     */
    isRotatingAllowed(rotationTarget: RotationTarget): boolean;
    parent(): EventListener | null;
    // private reset(): void;
    rotationMatchesPreviousRotation(): boolean;
    // private serverboundRotation(yaw: number, pitch: number): Rotation;
    /**
     * Our final target rotation. This rotation is only used to define our current rotation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:70}
     */
    setRotationTarget(plan: RotationTarget, priority: Priority, provider: ClientModule): void;
    setRotationTarget(rotation: Rotation, considerInventory: boolean, valueGroup: RotationsValueGroup, priority: Priority, provider: ClientModule, whenReached: RestrictedSingleUseAction | null): void;
    unregister(): void;
    /**
     * Update current rotation to a new rotation step
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt#L212 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationManager.kt:212}
     */
    update(): void;
}