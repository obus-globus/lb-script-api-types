import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineCreateFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfo.d.ts'
export class VkPipelineCreateFlags2CreateInfoKHR extends VkPipelineCreateFlags2CreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineCreateFlags2CreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineCreateFlags2CreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPipelineCreateFlags2CreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineCreateFlags2CreateInfoKHR;
    static create(): VkPipelineCreateFlags2CreateInfo;
    static create(paramarg0: number): VkPipelineCreateFlags2CreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineCreateFlags2CreateInfoKHR;
    static create(paramarg0: number): VkPipelineCreateFlags2CreateInfoKHR;
    static createSafe(paramarg0: number): VkPipelineCreateFlags2CreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineCreateFlags2CreateInfoKHR;
    static malloc(): VkPipelineCreateFlags2CreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineCreateFlags2CreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineCreateFlags2CreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineCreateFlags2CreateInfoKHR;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPipelineCreateFlags2CreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkPipelineCreateFlags2CreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineCreateFlags2CreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineCreateFlags2CreateInfoKHR;
    sType$Default(): VkPipelineCreateFlags2CreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkPipelineCreateFlags2CreateInfoKHR;
    set(arg0: VkPipelineCreateFlags2CreateInfo): VkPipelineCreateFlags2CreateInfo;
    set(arg0: VkPipelineCreateFlags2CreateInfoKHR): VkPipelineCreateFlags2CreateInfoKHR;
}