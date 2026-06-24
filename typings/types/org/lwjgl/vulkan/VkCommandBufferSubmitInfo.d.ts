import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkRenderPassStripeSubmitInfoARM } from '../../../org/lwjgl/vulkan/VkRenderPassStripeSubmitInfoARM.d.ts'
export class VkCommandBufferSubmitInfo extends Struct<VkCommandBufferSubmitInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMANDBUFFER: number;
    static DEVICEMASK: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCommandBufferSubmitInfo;
    static calloc(paramarg0: MemoryStack): VkCommandBufferSubmitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferSubmitInfo;
    static create(paramarg0: number): VkCommandBufferSubmitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferSubmitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferSubmitInfo;
    static malloc(paramarg0: MemoryStack): VkCommandBufferSubmitInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncommandBuffer(paramarg0: number): number;
    static ncommandBuffer(paramarg0: number, paramarg1: VkCommandBuffer): void;
    static ndeviceMask(paramarg0: number): number;
    static ndeviceMask(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    commandBuffer(): number;
    commandBuffer(arg0: VkCommandBuffer): VkCommandBufferSubmitInfo;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferSubmitInfo;
    deviceMask(): number;
    deviceMask(arg0: number): VkCommandBufferSubmitInfo;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferSubmitInfo;
    pNext(arg0: VkRenderPassStripeSubmitInfoARM): VkCommandBufferSubmitInfo;
    sType(): number;
    sType(arg0: number): VkCommandBufferSubmitInfo;
    sType$Default(): VkCommandBufferSubmitInfo;
    set(arg0: number, arg1: number, arg2: VkCommandBuffer, arg3: number): VkCommandBufferSubmitInfo;
    set(arg0: VkCommandBufferSubmitInfo): VkCommandBufferSubmitInfo;
    sizeof(): number;
}