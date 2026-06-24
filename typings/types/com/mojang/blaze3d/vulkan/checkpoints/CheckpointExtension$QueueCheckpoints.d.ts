import type { CheckpointExtension$StageCheckpoint } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$StageCheckpoint.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CheckpointExtension$QueueCheckpoints extends Record {
    constructor(queue: number, checkpoints: CheckpointExtension$StageCheckpoint[])
    // private checkpoints: CheckpointExtension$StageCheckpoint[];
    // private queue: number;
    checkpoints(): CheckpointExtension$StageCheckpoint[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    queue(): number;
    toString(): string;
}