import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceConditionalRenderingFeaturesEXT extends Struct<VkPhysicalDeviceConditionalRenderingFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONDITIONALRENDERING: number;
    static INHERITEDCONDITIONALRENDERING: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconditionalRendering(paramarg0: number): number;
    static nconditionalRendering(paramarg0: number, paramarg1: number): void;
    static ninheritedConditionalRendering(paramarg0: number): number;
    static ninheritedConditionalRendering(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    conditionalRendering(): boolean;
    conditionalRendering(arg0: boolean): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    inheritedConditionalRendering(): boolean;
    inheritedConditionalRendering(arg0: boolean): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    sType$Default(): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    set(arg0: VkPhysicalDeviceConditionalRenderingFeaturesEXT): VkPhysicalDeviceConditionalRenderingFeaturesEXT;
    sizeof(): number;
}