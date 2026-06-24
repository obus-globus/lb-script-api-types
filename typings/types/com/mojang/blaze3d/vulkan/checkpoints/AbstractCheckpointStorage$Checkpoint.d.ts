import type { CheckpointExtension$CheckpointType } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractCheckpointStorage$Checkpoint extends Record {
    constructor(id: number, label: string, type: CheckpointExtension$CheckpointType)
    // private id: number;
    // private label: string;
    // private type: CheckpointExtension$CheckpointType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): number;
    label(): string;
    toString(): string;
    type(): CheckpointExtension$CheckpointType;
}