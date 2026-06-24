import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMicromapUsageEXT extends Struct<VkMicromapUsageEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COUNT: number;
    static FORMAT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUBDIVISIONLEVEL: number;
    static calloc(): VkMicromapUsageEXT;
    static calloc(paramarg0: MemoryStack): VkMicromapUsageEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMicromapUsageEXT;
    static create(paramarg0: number): VkMicromapUsageEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMicromapUsageEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMicromapUsageEXT;
    static malloc(paramarg0: MemoryStack): VkMicromapUsageEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncount(paramarg0: number): number;
    static ncount(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nsubdivisionLevel(paramarg0: number): number;
    static nsubdivisionLevel(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    count(): number;
    count(arg0: number): VkMicromapUsageEXT;
    create(arg0: number, arg1: ByteBuffer): VkMicromapUsageEXT;
    format(): number;
    format(arg0: number): VkMicromapUsageEXT;
    set(arg0: number, arg1: number, arg2: number): VkMicromapUsageEXT;
    set(arg0: VkMicromapUsageEXT): VkMicromapUsageEXT;
    sizeof(): number;
    subdivisionLevel(): number;
    subdivisionLevel(arg0: number): VkMicromapUsageEXT;
}