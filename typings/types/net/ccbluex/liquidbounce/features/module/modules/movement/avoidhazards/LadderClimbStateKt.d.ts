import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class LadderClimbStateKt extends Object {
    /**
     * Returns whether the block context should be treated as a climb state.
     *
     * This mirrors vanilla climbing behavior relevant for ladder entry checks:
     * 1. Standing in a ladder block.
     * 2. Standing in an open trapdoor that connects to a ladder below with matching facing.
     *
     * @see net.minecraft.world.entity.LivingEntity.onClimbable
     * @see net.minecraft.world.level.block.LadderBlock
     * @see net.minecraft.world.level.block.TrapDoorBlock
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/LadderClimbState.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/LadderClimbState.kt:37}
     */
    static isLadderClimbState(isLadderBlock: boolean, isTrapDoorBlock: boolean, trapDoorOpen: boolean, trapDoorFacing: Direction, lowerIsLadderBlock: boolean, lowerLadderFacing: Direction): boolean;
    static isLadderClimbState(currentState: BlockState, belowState: BlockState): boolean;
}