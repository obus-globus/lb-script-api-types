import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalMemoryProperties } from '../../../org/lwjgl/vulkan/VkExternalMemoryProperties.d.ts'
export class VkExternalMemoryPropertiesKHR extends VkExternalMemoryProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPATIBLEHANDLETYPES: number;
    static EXPORTFROMIMPORTEDHANDLETYPES: number;
    static EXTERNALMEMORYFEATURES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): VkExternalMemoryProperties;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(paramarg0: number): VkExternalMemoryPropertiesKHR;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalMemoryProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalMemoryPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncompatibleHandleTypes(paramarg0: number): number;
    static nexportFromImportedHandleTypes(paramarg0: number): number;
    static nexternalMemoryFeatures(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkExternalMemoryPropertiesKHR;
}