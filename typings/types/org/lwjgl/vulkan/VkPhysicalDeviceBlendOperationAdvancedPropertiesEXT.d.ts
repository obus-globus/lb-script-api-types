import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT extends Struct<VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT> implements NativeResource {
    static ADVANCEDBLENDALLOPERATIONS: number;
    static ADVANCEDBLENDCORRELATEDOVERLAP: number;
    static ADVANCEDBLENDINDEPENDENTBLEND: number;
    static ADVANCEDBLENDMAXCOLORATTACHMENTS: number;
    static ADVANCEDBLENDNONPREMULTIPLIEDDSTCOLOR: number;
    static ADVANCEDBLENDNONPREMULTIPLIEDSRCCOLOR: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nadvancedBlendAllOperations(paramarg0: number): number;
    static nadvancedBlendCorrelatedOverlap(paramarg0: number): number;
    static nadvancedBlendIndependentBlend(paramarg0: number): number;
    static nadvancedBlendMaxColorAttachments(paramarg0: number): number;
    static nadvancedBlendNonPremultipliedDstColor(paramarg0: number): number;
    static nadvancedBlendNonPremultipliedSrcColor(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    advancedBlendAllOperations(): boolean;
    advancedBlendCorrelatedOverlap(): boolean;
    advancedBlendIndependentBlend(): boolean;
    advancedBlendMaxColorAttachments(): number;
    advancedBlendNonPremultipliedDstColor(): boolean;
    advancedBlendNonPremultipliedSrcColor(): boolean;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    sType$Default(): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    set(arg0: VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT): VkPhysicalDeviceBlendOperationAdvancedPropertiesEXT;
    sizeof(): number;
}