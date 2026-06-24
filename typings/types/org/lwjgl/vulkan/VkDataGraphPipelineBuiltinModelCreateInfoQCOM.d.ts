import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceDataGraphOperationSupportARM } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDataGraphOperationSupportARM.d.ts'
export class VkDataGraphPipelineBuiltinModelCreateInfoQCOM extends Struct<VkDataGraphPipelineBuiltinModelCreateInfoQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POPERATION: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static create(paramarg0: number): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npOperation(paramarg0: number): VkPhysicalDeviceDataGraphOperationSupportARM;
    static npOperation(paramarg0: number, paramarg1: VkPhysicalDeviceDataGraphOperationSupportARM): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    pOperation(): VkPhysicalDeviceDataGraphOperationSupportARM;
    pOperation(arg0: VkPhysicalDeviceDataGraphOperationSupportARM): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    sType$Default(): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    set(arg0: number, arg1: number, arg2: VkPhysicalDeviceDataGraphOperationSupportARM): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    set(arg0: VkDataGraphPipelineBuiltinModelCreateInfoQCOM): VkDataGraphPipelineBuiltinModelCreateInfoQCOM;
    sizeof(): number;
}