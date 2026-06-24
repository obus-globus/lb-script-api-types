import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExternalSemaphoreProperties extends Struct<VkExternalSemaphoreProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPATIBLEHANDLETYPES: number;
    static EXPORTFROMIMPORTEDHANDLETYPES: number;
    static EXTERNALSEMAPHOREFEATURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalSemaphoreProperties;
    static calloc(paramarg0: MemoryStack): VkExternalSemaphoreProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalSemaphoreProperties;
    static create(paramarg0: number): VkExternalSemaphoreProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalSemaphoreProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalSemaphoreProperties;
    static malloc(paramarg0: MemoryStack): VkExternalSemaphoreProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompatibleHandleTypes(paramarg0: number): number;
    static nexportFromImportedHandleTypes(paramarg0: number): number;
    static nexternalSemaphoreFeatures(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compatibleHandleTypes(): number;
    create(arg0: number, arg1: ByteBuffer): VkExternalSemaphoreProperties;
    exportFromImportedHandleTypes(): number;
    externalSemaphoreFeatures(): number;
    pNext(): number;
    pNext(arg0: number): VkExternalSemaphoreProperties;
    sType(): number;
    sType(arg0: number): VkExternalSemaphoreProperties;
    sType$Default(): VkExternalSemaphoreProperties;
    set(arg0: number, arg1: number): VkExternalSemaphoreProperties;
    set(arg0: VkExternalSemaphoreProperties): VkExternalSemaphoreProperties;
    sizeof(): number;
}