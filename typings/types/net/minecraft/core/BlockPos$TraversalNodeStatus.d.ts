import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class BlockPos$TraversalNodeStatus extends Enum<BlockPos$TraversalNodeStatus> {
    static ACCEPT: BlockPos$TraversalNodeStatus;
    static SKIP: BlockPos$TraversalNodeStatus;
    static STOP: BlockPos$TraversalNodeStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlockPos$TraversalNodeStatus;
    static values(): BlockPos$TraversalNodeStatus[];
    private constructor()
    name(): "ACCEPT" | "SKIP" | "STOP";
}