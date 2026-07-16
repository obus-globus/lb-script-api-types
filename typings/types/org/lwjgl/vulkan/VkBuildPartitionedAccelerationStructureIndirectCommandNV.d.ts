import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkStridedDeviceAddressNV } from '../../../org/lwjgl/vulkan/VkStridedDeviceAddressNV.d.ts'
export class VkBuildPartitionedAccelerationStructureIndirectCommandNV extends Struct<VkBuildPartitionedAccelerationStructureIndirectCommandNV> implements NativeResource {
    static ALIGNOF: number;
    static ARGCOUNT: number;
    static ARGDATA: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OPTYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static calloc(paramarg0: MemoryStack): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static create(paramarg0: number): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static malloc(paramarg0: MemoryStack): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nargCount(paramarg0: number): number;
    static nargCount(paramarg0: number, paramarg1: number): void;
    static nargData(paramarg0: number): VkStridedDeviceAddressNV;
    static nargData(paramarg0: number, paramarg1: VkStridedDeviceAddressNV): void;
    static nopType(paramarg0: number): number;
    static nopType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    argCount(): number;
    argCount(arg0: number): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    argData(): VkStridedDeviceAddressNV;
    argData(arg0: (param0: VkStridedDeviceAddressNV) => void): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    argData(arg0: VkStridedDeviceAddressNV): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    opType(): number;
    opType(arg0: number): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    set(arg0: number, arg1: number, arg2: VkStridedDeviceAddressNV): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    set(arg0: VkBuildPartitionedAccelerationStructureIndirectCommandNV): VkBuildPartitionedAccelerationStructureIndirectCommandNV;
    sizeof(): number;
}