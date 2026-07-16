import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstAMDX } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstAMDX.d.ts'
export class VkDispatchGraphInfoAMDX extends Struct<VkDispatchGraphInfoAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NODEINDEX: number;
    static PAYLOADCOUNT: number;
    static PAYLOADS: number;
    static PAYLOADSTRIDE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkDispatchGraphInfoAMDX;
    static calloc(paramarg0: MemoryStack): VkDispatchGraphInfoAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDispatchGraphInfoAMDX;
    static create(paramarg0: number): VkDispatchGraphInfoAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDispatchGraphInfoAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDispatchGraphInfoAMDX;
    static malloc(paramarg0: MemoryStack): VkDispatchGraphInfoAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nnodeIndex(paramarg0: number): number;
    static nnodeIndex(paramarg0: number, paramarg1: number): void;
    static npayloadCount(paramarg0: number): number;
    static npayloadCount(paramarg0: number, paramarg1: number): void;
    static npayloadStride(paramarg0: number): number;
    static npayloadStride(paramarg0: number, paramarg1: number): void;
    static npayloads(paramarg0: number): VkDeviceOrHostAddressConstAMDX;
    static npayloads(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstAMDX): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDispatchGraphInfoAMDX;
    nodeIndex(): number;
    nodeIndex(arg0: number): VkDispatchGraphInfoAMDX;
    payloadCount(): number;
    payloadCount(arg0: number): VkDispatchGraphInfoAMDX;
    payloadStride(): number;
    payloadStride(arg0: number): VkDispatchGraphInfoAMDX;
    payloads(): VkDeviceOrHostAddressConstAMDX;
    payloads(arg0: (param0: VkDeviceOrHostAddressConstAMDX) => void): VkDispatchGraphInfoAMDX;
    payloads(arg0: VkDeviceOrHostAddressConstAMDX): VkDispatchGraphInfoAMDX;
    set(arg0: number, arg1: number, arg2: VkDeviceOrHostAddressConstAMDX, arg3: number): VkDispatchGraphInfoAMDX;
    set(arg0: VkDispatchGraphInfoAMDX): VkDispatchGraphInfoAMDX;
    sizeof(): number;
}