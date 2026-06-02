import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
export class SubmitNodeStorage$BreakingBlockModelSubmit extends Record {
    // private model: BlockStateModel;
    // private pose: PoseStack$Pose;
    // private progress: number;
    // private seed: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): BlockStateModel;
    pose(): PoseStack$Pose;
    progress(): number;
    seed(): number;
    toString(): string;
}