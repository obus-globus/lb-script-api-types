import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanTransientMemory$VulkanAllocation extends Record {
    private constructor(vkBuffer: number, vmaAllocation: number, hostPtr: number, size: number)
    // private hostPtr: number;
    // private size: number;
    // private vkBuffer: number;
    // private vmaAllocation: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hostPtr(): number;
    size(): number;
    toString(): string;
    vkBuffer(): number;
    vmaAllocation(): number;
}