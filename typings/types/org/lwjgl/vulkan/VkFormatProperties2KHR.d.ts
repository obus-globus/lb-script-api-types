import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDrmFormatModifierPropertiesList2EXT } from '../../../org/lwjgl/vulkan/VkDrmFormatModifierPropertiesList2EXT.d.ts'
import type { VkDrmFormatModifierPropertiesListEXT } from '../../../org/lwjgl/vulkan/VkDrmFormatModifierPropertiesListEXT.d.ts'
import type { VkFormatProperties } from '../../../org/lwjgl/vulkan/VkFormatProperties.d.ts'
import type { VkFormatProperties2 } from '../../../org/lwjgl/vulkan/VkFormatProperties2.d.ts'
import type { VkFormatProperties3 } from '../../../org/lwjgl/vulkan/VkFormatProperties3.d.ts'
import type { VkFormatProperties3KHR } from '../../../org/lwjgl/vulkan/VkFormatProperties3KHR.d.ts'
import type { VkSubpassResolvePerformanceQueryEXT } from '../../../org/lwjgl/vulkan/VkSubpassResolvePerformanceQueryEXT.d.ts'
import type { VkTensorFormatPropertiesARM } from '../../../org/lwjgl/vulkan/VkTensorFormatPropertiesARM.d.ts'
export class VkFormatProperties2KHR extends VkFormatProperties2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMATPROPERTIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFormatProperties2;
    static calloc(paramarg0: MemoryStack): VkFormatProperties2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkFormatProperties2KHR;
    static calloc(paramarg0: MemoryStack): VkFormatProperties2KHR;
    static create(): VkFormatProperties2;
    static create(paramarg0: number): VkFormatProperties2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkFormatProperties2KHR;
    static create(paramarg0: number): VkFormatProperties2KHR;
    static createSafe(paramarg0: number): VkFormatProperties2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFormatProperties2KHR;
    static malloc(): VkFormatProperties2;
    static malloc(paramarg0: MemoryStack): VkFormatProperties2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkFormatProperties2KHR;
    static malloc(paramarg0: MemoryStack): VkFormatProperties2KHR;
    static nformatProperties(paramarg0: number): VkFormatProperties;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkFormatProperties2KHR;
    pNext(): number;
    pNext(arg0: number): VkFormatProperties2KHR;
    pNext(arg0: VkDrmFormatModifierPropertiesList2EXT): VkFormatProperties2;
    pNext(arg0: VkDrmFormatModifierPropertiesListEXT): VkFormatProperties2;
    pNext(arg0: VkFormatProperties3): VkFormatProperties2;
    pNext(arg0: VkFormatProperties3KHR): VkFormatProperties2;
    pNext(arg0: VkSubpassResolvePerformanceQueryEXT): VkFormatProperties2;
    pNext(arg0: VkTensorFormatPropertiesARM): VkFormatProperties2;
    sType(): number;
    sType(arg0: number): VkFormatProperties2KHR;
    sType$Default(): VkFormatProperties2KHR;
    set(arg0: number, arg1: number): VkFormatProperties2KHR;
    set(arg0: VkFormatProperties2): VkFormatProperties2;
    set(arg0: VkFormatProperties2KHR): VkFormatProperties2KHR;
}