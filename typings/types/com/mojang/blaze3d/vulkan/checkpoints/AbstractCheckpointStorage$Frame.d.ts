import type { AbstractCheckpointStorage$Checkpoint } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/AbstractCheckpointStorage$Checkpoint.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractCheckpointStorage$Frame extends Record {
    private constructor(checkpoints: AbstractCheckpointStorage$Checkpoint[])
    // private checkpoints: AbstractCheckpointStorage$Checkpoint[];
    checkpoints(): AbstractCheckpointStorage$Checkpoint[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}