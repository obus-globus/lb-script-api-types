import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExternalMemoryImageCreateInfo extends Struct<VkExternalMemoryImageCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HANDLETYPES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalMemoryImageCreateInfo;
    static calloc(paramarg0: MemoryStack): VkExternalMemoryImageCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalMemoryImageCreateInfo;
    static create(paramarg0: number): VkExternalMemoryImageCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalMemoryImageCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalMemoryImageCreateInfo;
    static malloc(paramarg0: MemoryStack): VkExternalMemoryImageCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhandleTypes(paramarg0: number): number;
    static nhandleTypes(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExternalMemoryImageCreateInfo;
    handleTypes(): number;
    handleTypes(arg0: number): VkExternalMemoryImageCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkExternalMemoryImageCreateInfo;
    sType(): number;
    sType(arg0: number): VkExternalMemoryImageCreateInfo;
    sType$Default(): VkExternalMemoryImageCreateInfo;
    set(arg0: number, arg1: number, arg2: number): VkExternalMemoryImageCreateInfo;
    set(arg0: VkExternalMemoryImageCreateInfo): VkExternalMemoryImageCreateInfo;
    sizeof(): number;
}