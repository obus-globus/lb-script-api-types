import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkConformanceVersion } from '../../../org/lwjgl/vulkan/VkConformanceVersion.d.ts'
export class VkConformanceVersionKHR extends VkConformanceVersion {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAJOR: number;
    static MINOR: number;
    static PATCH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUBMINOR: number;
    static calloc(): VkConformanceVersion;
    static calloc(paramarg0: MemoryStack): VkConformanceVersion;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkConformanceVersionKHR;
    static calloc(paramarg0: MemoryStack): VkConformanceVersionKHR;
    static create(): VkConformanceVersion;
    static create(paramarg0: number): VkConformanceVersion;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkConformanceVersionKHR;
    static create(paramarg0: number): VkConformanceVersionKHR;
    static createSafe(paramarg0: number): VkConformanceVersion;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkConformanceVersionKHR;
    static malloc(): VkConformanceVersion;
    static malloc(paramarg0: MemoryStack): VkConformanceVersion;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkConformanceVersionKHR;
    static malloc(paramarg0: MemoryStack): VkConformanceVersionKHR;
    static nmajor(paramarg0: number): number;
    static nmajor(paramarg0: number, paramarg1: number): void;
    static nminor(paramarg0: number): number;
    static nminor(paramarg0: number, paramarg1: number): void;
    static npatch(paramarg0: number): number;
    static npatch(paramarg0: number, paramarg1: number): void;
    static nsubminor(paramarg0: number): number;
    static nsubminor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkConformanceVersionKHR;
    major(): number;
    major(arg0: number): VkConformanceVersionKHR;
    minor(): number;
    minor(arg0: number): VkConformanceVersionKHR;
    patch(): number;
    patch(arg0: number): VkConformanceVersionKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkConformanceVersionKHR;
    set(arg0: VkConformanceVersion): VkConformanceVersion;
    set(arg0: VkConformanceVersionKHR): VkConformanceVersionKHR;
    subminor(): number;
    subminor(arg0: number): VkConformanceVersionKHR;
}