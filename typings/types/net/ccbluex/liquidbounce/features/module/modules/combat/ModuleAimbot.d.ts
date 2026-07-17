import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { RangedValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MouseRotationEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MouseRotationEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAimbot$Axis } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAimbot$Axis.d.ts'
import type { ModuleAimbot$IgnoreOpened } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAimbot$IgnoreOpened.d.ts'
import type { KillAuraRequirements } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRequirements.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationWithVector } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
import type { FactorAngleSmooth } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.d.ts'
import type { PointTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointTracker.d.ts'
import type { TargetTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Aimbot module
 *
 * Automatically faces selected entities around you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAimbot.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAimbot.kt:58}
 */
export class ModuleAimbot extends ClientModule {
    static INSTANCE: ModuleAimbot;
    // private angleSmooth: ModeValueGroup<FactorAngleSmooth>;
    // private axis: ModuleAimbot$Axis[];
    // private /*not mapped: */ getAxis(): ModuleAimbot$Axis[];
    // private ignores: ModuleAimbot$IgnoreOpened[];
    // private /*not mapped: */ getIgnores(): ModuleAimbot$IgnoreOpened[];
    // private mouseMovement: EventHook<MouseRotationEvent>;
    // private playerRotation: Rotation | null;
    // private pointTracker: PointTracker;
    // private range: RangedValue<number>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private /*not mapped: */ getRequirementsMet(): boolean;
    // private requires: KillAuraRequirements[];
    // private /*not mapped: */ getRequires(): KillAuraRequirements[];
    // private targetRotation: Rotation | null;
    readonly targetTracker: TargetTracker;
    // private tickHandler: EventHook<RotationUpdateEvent>;
    // private findNextTargetRotation(): Pair<Entity, RotationWithVector> | null;
    // private lookAt(partialTicks: number): void;
    onDisabled(): void;
}