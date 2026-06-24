import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkValidationCacheCreateInfoEXT extends Struct<VkValidationCacheCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static INITIALDATASIZE: number;
    static PINITIALDATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkValidationCacheCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkValidationCacheCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkValidationCacheCreateInfoEXT;
    static create(paramarg0: number): VkValidationCacheCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkValidationCacheCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkValidationCacheCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkValidationCacheCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ninitialDataSize(paramarg0: number): number;
    static ninitialDataSize(paramarg0: number, paramarg1: number): void;
    static npInitialData(paramarg0: number): ByteBuffer;
    static npInitialData(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkValidationCacheCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkValidationCacheCreateInfoEXT;
    initialDataSize(): number;
    pInitialData(): ByteBuffer;
    pInitialData(arg0: ByteBuffer): VkValidationCacheCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkValidationCacheCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkValidationCacheCreateInfoEXT;
    sType$Default(): VkValidationCacheCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer): VkValidationCacheCreateInfoEXT;
    set(arg0: VkValidationCacheCreateInfoEXT): VkValidationCacheCreateInfoEXT;
    sizeof(): number;
}