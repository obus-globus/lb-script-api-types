import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanQueue$Submission$SemaphoreOp extends Record {
    private constructor(vkSemaphore: number, value: number, stageMask: number)
    // private stageMask: number;
    // private value: number;
    // private vkSemaphore: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    stageMask(): number;
    toString(): string;
    value(): number;
    vkSemaphore(): number;
}