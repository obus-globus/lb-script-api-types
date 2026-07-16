import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTensorCreateInfoARM } from '../../../org/lwjgl/vulkan/VkTensorCreateInfoARM.d.ts'
export class VkDeviceTensorMemoryRequirementsARM extends Struct<VkDeviceTensorMemoryRequirementsARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCREATEINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceTensorMemoryRequirementsARM;
    static calloc(paramarg0: MemoryStack): VkDeviceTensorMemoryRequirementsARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceTensorMemoryRequirementsARM;
    static create(paramarg0: number): VkDeviceTensorMemoryRequirementsARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceTensorMemoryRequirementsARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceTensorMemoryRequirementsARM;
    static malloc(paramarg0: MemoryStack): VkDeviceTensorMemoryRequirementsARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npCreateInfo(paramarg0: number): VkTensorCreateInfoARM;
    static npCreateInfo(paramarg0: number, paramarg1: VkTensorCreateInfoARM): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceTensorMemoryRequirementsARM;
    pCreateInfo(): VkTensorCreateInfoARM;
    pCreateInfo(arg0: VkTensorCreateInfoARM): VkDeviceTensorMemoryRequirementsARM;
    pNext(): number;
    pNext(arg0: number): VkDeviceTensorMemoryRequirementsARM;
    sType(): number;
    sType(arg0: number): VkDeviceTensorMemoryRequirementsARM;
    sType$Default(): VkDeviceTensorMemoryRequirementsARM;
    set(arg0: number, arg1: number, arg2: VkTensorCreateInfoARM): VkDeviceTensorMemoryRequirementsARM;
    set(arg0: VkDeviceTensorMemoryRequirementsARM): VkDeviceTensorMemoryRequirementsARM;
    sizeof(): number;
}