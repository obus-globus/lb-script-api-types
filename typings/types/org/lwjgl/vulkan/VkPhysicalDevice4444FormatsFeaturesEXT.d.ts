import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevice4444FormatsFeaturesEXT extends Struct<VkPhysicalDevice4444FormatsFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMATA4B4G4R4: number;
    static FORMATA4R4G4B4: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevice4444FormatsFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevice4444FormatsFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevice4444FormatsFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevice4444FormatsFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevice4444FormatsFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevice4444FormatsFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevice4444FormatsFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nformatA4B4G4R4(paramarg0: number): number;
    static nformatA4B4G4R4(paramarg0: number, paramarg1: number): void;
    static nformatA4R4G4B4(paramarg0: number): number;
    static nformatA4R4G4B4(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevice4444FormatsFeaturesEXT;
    formatA4B4G4R4(): boolean;
    formatA4B4G4R4(arg0: boolean): VkPhysicalDevice4444FormatsFeaturesEXT;
    formatA4R4G4B4(): boolean;
    formatA4R4G4B4(arg0: boolean): VkPhysicalDevice4444FormatsFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevice4444FormatsFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevice4444FormatsFeaturesEXT;
    sType$Default(): VkPhysicalDevice4444FormatsFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDevice4444FormatsFeaturesEXT;
    set(arg0: VkPhysicalDevice4444FormatsFeaturesEXT): VkPhysicalDevice4444FormatsFeaturesEXT;
    sizeof(): number;
}