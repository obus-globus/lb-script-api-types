import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkComputePipelineIndirectBufferInfoNV extends Struct<VkComputePipelineIndirectBufferInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEADDRESS: number;
    static PIPELINEDEVICEADDRESSCAPTUREREPLAY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkComputePipelineIndirectBufferInfoNV;
    static calloc(paramarg0: MemoryStack): VkComputePipelineIndirectBufferInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkComputePipelineIndirectBufferInfoNV;
    static create(paramarg0: number): VkComputePipelineIndirectBufferInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkComputePipelineIndirectBufferInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkComputePipelineIndirectBufferInfoNV;
    static malloc(paramarg0: MemoryStack): VkComputePipelineIndirectBufferInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceAddress(paramarg0: number): number;
    static ndeviceAddress(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineDeviceAddressCaptureReplay(paramarg0: number): number;
    static npipelineDeviceAddressCaptureReplay(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkComputePipelineIndirectBufferInfoNV;
    deviceAddress(): number;
    deviceAddress(arg0: number): VkComputePipelineIndirectBufferInfoNV;
    pNext(): number;
    pNext(arg0: number): VkComputePipelineIndirectBufferInfoNV;
    pipelineDeviceAddressCaptureReplay(): number;
    pipelineDeviceAddressCaptureReplay(arg0: number): VkComputePipelineIndirectBufferInfoNV;
    sType(): number;
    sType(arg0: number): VkComputePipelineIndirectBufferInfoNV;
    sType$Default(): VkComputePipelineIndirectBufferInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkComputePipelineIndirectBufferInfoNV;
    set(arg0: VkComputePipelineIndirectBufferInfoNV): VkComputePipelineIndirectBufferInfoNV;
    size(): number;
    size(arg0: number): VkComputePipelineIndirectBufferInfoNV;
    sizeof(): number;
}