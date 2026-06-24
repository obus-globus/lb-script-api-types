import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClusterAccelerationStructureInputInfoNV } from '../../../org/lwjgl/vulkan/VkClusterAccelerationStructureInputInfoNV.d.ts'
import type { VkStridedDeviceAddressRegionKHR } from '../../../org/lwjgl/vulkan/VkStridedDeviceAddressRegionKHR.d.ts'
export class VkClusterAccelerationStructureCommandsInfoNV extends Struct<VkClusterAccelerationStructureCommandsInfoNV> implements NativeResource {
    static ADDRESSRESOLUTIONFLAGS: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTADDRESSESARRAY: number;
    static DSTIMPLICITDATA: number;
    static DSTSIZESARRAY: number;
    static INPUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCRATCHDATA: number;
    static SIZEOF: number;
    static SRCINFOSARRAY: number;
    static SRCINFOSCOUNT: number;
    static STYPE: number;
    static calloc(): VkClusterAccelerationStructureCommandsInfoNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureCommandsInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureCommandsInfoNV;
    static create(paramarg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureCommandsInfoNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureCommandsInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressResolutionFlags(paramarg0: number): number;
    static naddressResolutionFlags(paramarg0: number, paramarg1: number): void;
    static ndstAddressesArray(paramarg0: number): VkStridedDeviceAddressRegionKHR;
    static ndstAddressesArray(paramarg0: number, paramarg1: VkStridedDeviceAddressRegionKHR): void;
    static ndstImplicitData(paramarg0: number): number;
    static ndstImplicitData(paramarg0: number, paramarg1: number): void;
    static ndstSizesArray(paramarg0: number): VkStridedDeviceAddressRegionKHR;
    static ndstSizesArray(paramarg0: number, paramarg1: VkStridedDeviceAddressRegionKHR): void;
    static ninput(paramarg0: number): VkClusterAccelerationStructureInputInfoNV;
    static ninput(paramarg0: number, paramarg1: VkClusterAccelerationStructureInputInfoNV): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscratchData(paramarg0: number): number;
    static nscratchData(paramarg0: number, paramarg1: number): void;
    static nsrcInfosArray(paramarg0: number): VkStridedDeviceAddressRegionKHR;
    static nsrcInfosArray(paramarg0: number, paramarg1: VkStridedDeviceAddressRegionKHR): void;
    static nsrcInfosCount(paramarg0: number): number;
    static nsrcInfosCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addressResolutionFlags(): number;
    addressResolutionFlags(arg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureCommandsInfoNV;
    dstAddressesArray(): VkStridedDeviceAddressRegionKHR;
    dstAddressesArray(arg0: (param0: VkStridedDeviceAddressRegionKHR) => void): VkClusterAccelerationStructureCommandsInfoNV;
    dstAddressesArray(arg0: VkStridedDeviceAddressRegionKHR): VkClusterAccelerationStructureCommandsInfoNV;
    dstImplicitData(): number;
    dstImplicitData(arg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    dstSizesArray(): VkStridedDeviceAddressRegionKHR;
    dstSizesArray(arg0: (param0: VkStridedDeviceAddressRegionKHR) => void): VkClusterAccelerationStructureCommandsInfoNV;
    dstSizesArray(arg0: VkStridedDeviceAddressRegionKHR): VkClusterAccelerationStructureCommandsInfoNV;
    input(): VkClusterAccelerationStructureInputInfoNV;
    input(arg0: (param0: VkClusterAccelerationStructureInputInfoNV) => void): VkClusterAccelerationStructureCommandsInfoNV;
    input(arg0: VkClusterAccelerationStructureInputInfoNV): VkClusterAccelerationStructureCommandsInfoNV;
    pNext(): number;
    pNext(arg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    sType(): number;
    sType(arg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    sType$Default(): VkClusterAccelerationStructureCommandsInfoNV;
    scratchData(): number;
    scratchData(arg0: number): VkClusterAccelerationStructureCommandsInfoNV;
    set(arg0: number, arg1: number, arg2: VkClusterAccelerationStructureInputInfoNV, arg3: number, arg4: number, arg5: VkStridedDeviceAddressRegionKHR, arg6: VkStridedDeviceAddressRegionKHR, arg7: VkStridedDeviceAddressRegionKHR, arg8: number, arg9: number): VkClusterAccelerationStructureCommandsInfoNV;
    set(arg0: VkClusterAccelerationStructureCommandsInfoNV): VkClusterAccelerationStructureCommandsInfoNV;
    sizeof(): number;
    srcInfosArray(): VkStridedDeviceAddressRegionKHR;
    srcInfosArray(arg0: (param0: VkStridedDeviceAddressRegionKHR) => void): VkClusterAccelerationStructureCommandsInfoNV;
    srcInfosArray(arg0: VkStridedDeviceAddressRegionKHR): VkClusterAccelerationStructureCommandsInfoNV;
    srcInfosCount(): number;
    srcInfosCount(arg0: number): VkClusterAccelerationStructureCommandsInfoNV;
}