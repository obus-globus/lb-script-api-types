import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkAccelerationStructureGeometryAabbsDataKHR extends Struct<VkAccelerationStructureGeometryAabbsDataKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static STYPE: number;
    static calloc(): VkAccelerationStructureGeometryAabbsDataKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryAabbsDataKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureGeometryAabbsDataKHR;
    static create(paramarg0: number): VkAccelerationStructureGeometryAabbsDataKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureGeometryAabbsDataKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureGeometryAabbsDataKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryAabbsDataKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ndata(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureGeometryAabbsDataKHR;
    data(): VkDeviceOrHostAddressConstKHR;
    data(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometryAabbsDataKHR;
    data(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometryAabbsDataKHR;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureGeometryAabbsDataKHR;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureGeometryAabbsDataKHR;
    sType$Default(): VkAccelerationStructureGeometryAabbsDataKHR;
    set(arg0: number, arg1: number, arg2: VkDeviceOrHostAddressConstKHR, arg3: number): VkAccelerationStructureGeometryAabbsDataKHR;
    set(arg0: VkAccelerationStructureGeometryAabbsDataKHR): VkAccelerationStructureGeometryAabbsDataKHR;
    sizeof(): number;
    stride(): number;
    stride(arg0: number): VkAccelerationStructureGeometryAabbsDataKHR;
}