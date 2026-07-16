import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTensorDependencyInfoARM } from '../../../org/lwjgl/vulkan/VkTensorDependencyInfoARM.d.ts'
import type { VkTensorMemoryBarrierARM } from '../../../org/lwjgl/vulkan/VkTensorMemoryBarrierARM.d.ts'
export class VkDependencyInfo extends Struct<VkDependencyInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERMEMORYBARRIERCOUNT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPENDENCYFLAGS: number;
    static IMAGEMEMORYBARRIERCOUNT: number;
    static MEMORYBARRIERCOUNT: number;
    static PBUFFERMEMORYBARRIERS: number;
    static PIMAGEMEMORYBARRIERS: number;
    static PMEMORYBARRIERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDependencyInfo;
    static calloc(paramarg0: MemoryStack): VkDependencyInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDependencyInfo;
    static create(paramarg0: number): VkDependencyInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDependencyInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDependencyInfo;
    static malloc(paramarg0: MemoryStack): VkDependencyInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferMemoryBarrierCount(paramarg0: number): number;
    static nbufferMemoryBarrierCount(paramarg0: number, paramarg1: number): void;
    static ndependencyFlags(paramarg0: number): number;
    static ndependencyFlags(paramarg0: number, paramarg1: number): void;
    static nimageMemoryBarrierCount(paramarg0: number): number;
    static nimageMemoryBarrierCount(paramarg0: number, paramarg1: number): void;
    static nmemoryBarrierCount(paramarg0: number): number;
    static nmemoryBarrierCount(paramarg0: number, paramarg1: number): void;
    static npBufferMemoryBarriers(paramarg0: number): (Object | null)[];
    static npBufferMemoryBarriers(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npImageMemoryBarriers(paramarg0: number): (Object | null)[];
    static npImageMemoryBarriers(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npMemoryBarriers(paramarg0: number): (Object | null)[];
    static npMemoryBarriers(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferMemoryBarrierCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDependencyInfo;
    dependencyFlags(): number;
    dependencyFlags(arg0: number): VkDependencyInfo;
    imageMemoryBarrierCount(): number;
    memoryBarrierCount(): number;
    pBufferMemoryBarriers(): (Object | null)[];
    pBufferMemoryBarriers(arg0: (Object | null)[]): VkDependencyInfo;
    pImageMemoryBarriers(): (Object | null)[];
    pImageMemoryBarriers(arg0: (Object | null)[]): VkDependencyInfo;
    pMemoryBarriers(): (Object | null)[];
    pMemoryBarriers(arg0: (Object | null)[]): VkDependencyInfo;
    pNext(): number;
    pNext(arg0: number): VkDependencyInfo;
    pNext(arg0: VkTensorDependencyInfoARM): VkDependencyInfo;
    pNext(arg0: VkTensorMemoryBarrierARM): VkDependencyInfo;
    sType(): number;
    sType(arg0: number): VkDependencyInfo;
    sType$Default(): VkDependencyInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[], arg5: (Object | null)[]): VkDependencyInfo;
    set(arg0: VkDependencyInfo): VkDependencyInfo;
    sizeof(): number;
}