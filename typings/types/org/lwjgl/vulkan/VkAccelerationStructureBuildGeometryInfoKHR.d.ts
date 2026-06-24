import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressKHR.d.ts'
export class VkAccelerationStructureBuildGeometryInfoKHR extends Struct<VkAccelerationStructureBuildGeometryInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCELERATIONSTRUCTURE: number;
    static FLAGS: number;
    static GEOMETRYCOUNT: number;
    static MODE: number;
    static PGEOMETRIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPGEOMETRIES: number;
    static SCRATCHDATA: number;
    static SIZEOF: number;
    static SRCACCELERATIONSTRUCTURE: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkAccelerationStructureBuildGeometryInfoKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureBuildGeometryInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureBuildGeometryInfoKHR;
    static create(paramarg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureBuildGeometryInfoKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureBuildGeometryInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccelerationStructure(paramarg0: number): number;
    static ndstAccelerationStructure(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngeometryCount(paramarg0: number): number;
    static ngeometryCount(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npGeometries(paramarg0: number): (Object | null)[];
    static npGeometries(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nppGeometries(paramarg0: number): PointerBuffer;
    static nppGeometries(paramarg0: number, paramarg1: PointerBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscratchData(paramarg0: number): VkDeviceOrHostAddressKHR;
    static nscratchData(paramarg0: number, paramarg1: VkDeviceOrHostAddressKHR): void;
    static nsrcAccelerationStructure(paramarg0: number): number;
    static nsrcAccelerationStructure(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureBuildGeometryInfoKHR;
    dstAccelerationStructure(): number;
    dstAccelerationStructure(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    geometryCount(): number;
    geometryCount(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    mode(): number;
    mode(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    pGeometries(): (Object | null)[];
    pGeometries(arg0: (Object | null)[]): VkAccelerationStructureBuildGeometryInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    ppGeometries(): PointerBuffer;
    ppGeometries(arg0: PointerBuffer): VkAccelerationStructureBuildGeometryInfoKHR;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    sType$Default(): VkAccelerationStructureBuildGeometryInfoKHR;
    scratchData(): VkDeviceOrHostAddressKHR;
    scratchData(arg0: (param0: VkDeviceOrHostAddressKHR) => void): VkAccelerationStructureBuildGeometryInfoKHR;
    scratchData(arg0: VkDeviceOrHostAddressKHR): VkAccelerationStructureBuildGeometryInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: (Object | null)[], arg9: PointerBuffer, arg10: VkDeviceOrHostAddressKHR): VkAccelerationStructureBuildGeometryInfoKHR;
    set(arg0: VkAccelerationStructureBuildGeometryInfoKHR): VkAccelerationStructureBuildGeometryInfoKHR;
    sizeof(): number;
    srcAccelerationStructure(): number;
    srcAccelerationStructure(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
    type(): number;
    type(arg0: number): VkAccelerationStructureBuildGeometryInfoKHR;
}