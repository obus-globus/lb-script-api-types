import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVertexInputAttributeDescription extends Struct<VkVertexInputAttributeDescription> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static LOCATION: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkVertexInputAttributeDescription;
    static calloc(paramarg0: MemoryStack): VkVertexInputAttributeDescription;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVertexInputAttributeDescription;
    static create(paramarg0: number): VkVertexInputAttributeDescription;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVertexInputAttributeDescription;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVertexInputAttributeDescription;
    static malloc(paramarg0: MemoryStack): VkVertexInputAttributeDescription;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nlocation(paramarg0: number): number;
    static nlocation(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): VkVertexInputAttributeDescription;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVertexInputAttributeDescription;
    format(): number;
    format(arg0: number): VkVertexInputAttributeDescription;
    location(): number;
    location(arg0: number): VkVertexInputAttributeDescription;
    offset(): number;
    offset(arg0: number): VkVertexInputAttributeDescription;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkVertexInputAttributeDescription;
    set(arg0: VkVertexInputAttributeDescription): VkVertexInputAttributeDescription;
    sizeof(): number;
}