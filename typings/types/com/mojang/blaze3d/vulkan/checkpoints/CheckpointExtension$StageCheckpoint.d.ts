import type { CheckpointExtension$CheckpointType } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CheckpointExtension$StageCheckpoint extends Record {
    constructor(stage: number, type: CheckpointExtension$CheckpointType, label: string)
    // private label: string;
    // private stage: number;
    // private type: CheckpointExtension$CheckpointType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    label(): string;
    stage(): number;
    toString(): string;
    type(): CheckpointExtension$CheckpointType;
}