import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAvoidHazards$Avoid } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAvoidHazards$Avoid.d.ts'
import type { ModuleAvoidHazards$AvoidMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAvoidHazards$AvoidMode.d.ts'
import type { SimulatedPlayer } from '../../../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { DirectionalInput } from '../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * Anti hazards module
 *
 * Prevents you walking into blocks that might be malicious for you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAvoidHazards.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAvoidHazards.kt:58}
 */
export class ModuleAvoidHazards extends ClientModule {
    static INSTANCE: ModuleAvoidHazards;
    // private CACTUS_BLOCK_MARGIN: number;
    // private MOVEMENT_PREDICTION_TICKS: number;
    // private UNSAFE_BLOCK_CAP: VoxelShape;
    // private avoid: ModuleAvoidHazards$Avoid[];
    // private /*not mapped: */ getAvoid(): ModuleAvoidHazards$Avoid[];
    readonly cobWebs: boolean;
    // private mode: ModuleAvoidHazards$AvoidMode;
    // private /*not mapped: */ getMode(): ModuleAvoidHazards$AvoidMode;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly shapeHandler: EventHook<BlockShapeEvent>;
    // private isHazardCollision(boundingBox: AABB, level: ClientLevel, avoidModes: ModuleAvoidHazards$Avoid[]): boolean;
    // private isLadderClimbStateAt(pos: BlockPos): boolean;
    // private isSafeInput(directionalInput: DirectionalInput, jump: boolean, sneak: boolean, avoidModes: ModuleAvoidHazards$Avoid[]): boolean;
    // private wouldEnterLadderClimbState(simulatedPlayer: SimulatedPlayer): boolean;
}