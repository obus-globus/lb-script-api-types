import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ModuleElytraTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/ModuleElytraTarget.d.ts'
import type { TargetEntityMovementPrediction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/TargetEntityMovementPrediction.d.ts'
import type { TargetRotatePosition } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/TargetRotatePosition.d.ts'
import type { RotationTarget } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationProcessor } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ElytraRotationProcessor extends ValueGroup implements EventListener, RotationProcessor {
    static INSTANCE: ElytraRotationProcessor;
    // private autoDistance: boolean;
    // private /*not mapped: */ getAutoDistance(): boolean;
    // private /*not mapped: */ getBasePitchSpeed(): number;
    // private /*not mapped: */ getBaseYawSpeed(): number;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private ignoreKillAura: boolean;
    /*not mapped: */ getIgnoreKillAura$net_ccbluex_liquidbounce(): boolean;
    // private look: boolean;
    /*not mapped: */ getLook$net_ccbluex_liquidbounce(): boolean;
    // private prediction: TargetEntityMovementPrediction;
    // private /*not mapped: */ getRandomDirectionVector(): Vec3;
    // private rotateAt: TargetRotatePosition;
    // private /*not mapped: */ getRotateAt(): TargetRotatePosition;
    // private rotationsUpdate: EventHook<RotationUpdateEvent>;
    readonly running: boolean;
    // private sharpRotations: boolean;
    // private /*not mapped: */ getSharpRotations(): boolean;
    // private calculateRotation(target: LivingEntity): Rotation;
    children(): EventListener[];
    parent(): EventListener | null;
    parent(): ModuleElytraTarget;
    /**
     * Adaptively smooths the angle, but at the same time
     * Allows it to work well with {@link ModuleKillAura} and {@link ignoreKillAura}.
     *
     * Please do not use this ANYWHERE ELSE
     * This is only for {@link ModuleElytraTarget}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/ElytraRotationProcessor.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/ElytraRotationProcessor.kt:89}
     */
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
    unregister(): void;
}