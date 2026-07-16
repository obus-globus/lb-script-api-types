import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT extends Struct<VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT> implements NativeResource {
    static ADVANCEDBLENDCOHERENTOPERATIONS: number;
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
    static calloc(): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nadvancedBlendCoherentOperations(paramarg0: number): number;
    static nadvancedBlendCoherentOperations(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    advancedBlendCoherentOperations(): boolean;
    advancedBlendCoherentOperations(arg0: boolean): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    sType$Default(): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    set(arg0: VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT): VkPhysicalDeviceBlendOperationAdvancedFeaturesEXT;
    sizeof(): number;
}