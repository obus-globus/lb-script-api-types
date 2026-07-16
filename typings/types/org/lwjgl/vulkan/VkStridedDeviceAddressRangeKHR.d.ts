import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkStridedDeviceAddressRangeKHR extends Struct<VkStridedDeviceAddressRangeKHR> implements NativeResource {
    static ADDRESS: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static calloc(): VkStridedDeviceAddressRangeKHR;
    static calloc(paramarg0: MemoryStack): VkStridedDeviceAddressRangeKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkStridedDeviceAddressRangeKHR;
    static create(paramarg0: number): VkStridedDeviceAddressRangeKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkStridedDeviceAddressRangeKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkStridedDeviceAddressRangeKHR;
    static malloc(paramarg0: MemoryStack): VkStridedDeviceAddressRangeKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddress$(paramarg0: number): number;
    static naddress$(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    address$(): number;
    address$(arg0: number): VkStridedDeviceAddressRangeKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkStridedDeviceAddressRangeKHR;
    set(arg0: number, arg1: number, arg2: number): VkStridedDeviceAddressRangeKHR;
    set(arg0: VkStridedDeviceAddressRangeKHR): VkStridedDeviceAddressRangeKHR;
    size(): number;
    size(arg0: number): VkStridedDeviceAddressRangeKHR;
    sizeof(): number;
    stride(): number;
    stride(arg0: number): VkStridedDeviceAddressRangeKHR;
}