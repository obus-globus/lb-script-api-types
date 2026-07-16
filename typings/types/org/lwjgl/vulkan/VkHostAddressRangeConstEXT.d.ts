import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkHostAddressRangeConstEXT extends Struct<VkHostAddressRangeConstEXT> implements NativeResource {
    static ADDRESS: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): VkHostAddressRangeConstEXT;
    static calloc(paramarg0: MemoryStack): VkHostAddressRangeConstEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkHostAddressRangeConstEXT;
    static create(paramarg0: number): VkHostAddressRangeConstEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkHostAddressRangeConstEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkHostAddressRangeConstEXT;
    static malloc(paramarg0: MemoryStack): VkHostAddressRangeConstEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddress$(paramarg0: number): ByteBuffer;
    static naddress$(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    address$(): ByteBuffer;
    address$(arg0: ByteBuffer): VkHostAddressRangeConstEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkHostAddressRangeConstEXT;
    set(arg0: VkHostAddressRangeConstEXT): VkHostAddressRangeConstEXT;
    size(): number;
    sizeof(): number;
}