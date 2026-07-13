import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Event } from '../../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PerspectiveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFreeCam$CancelOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam$CancelOn.d.ts'
import type { ModuleFreeCam$CancelTrigger } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam$CancelTrigger.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * FreeCam module
 *
 * Allows you to move out of your body.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:71}
 */
export class ModuleFreeCam extends ClientModule {
    static INSTANCE: ModuleFreeCam;
    // private alwaysCancelOnHandler: EventHook<WorldChangeEvent>;
    // private cancelOn: ModuleFreeCam$CancelOn[];
    // private /*not mapped: */ getCancelOn(): ModuleFreeCam$CancelOn[];
    // private forceSneakHandler: EventHook<MovementInputEvent>;
    // private inputHandler: EventHook<MovementInputEvent>;
    // private keepSneaking: boolean;
    // private /*not mapped: */ getKeepSneaking(): boolean;
    // private midClickCameraTeleport: boolean;
    // private /*not mapped: */ getMidClickCameraTeleport(): boolean;
    // private mouseHandler: EventHook<MouseButtonEvent>;
    // private perspectiveHandler: EventHook<PerspectiveEvent>;
    // private rotationHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    applyCameraPosition(entity: Entity | null, partialTicks: number): void;
    // private cancelTrigger<E extends Event>(predicate: (param0: E) => boolean): ModuleFreeCam$CancelTrigger<E>;
    // private getCameraLookingAt(): Vec3 | null;
    /**
     * Modify the raycast position
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L298 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:298}
     */
    modifyRaycast(original: Vec3, entity: Entity, tickDelta: number): Vec3;
    onDisabled(): void;
    onEnabled(): void;
    renderPlayerFromAllPerspectives(entity: LivingEntity): boolean;
    shouldDisableCameraInteract(): boolean;
}