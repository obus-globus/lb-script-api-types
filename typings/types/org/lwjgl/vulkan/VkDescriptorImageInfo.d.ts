import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorImageInfo extends Struct<VkDescriptorImageInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGELAYOUT: number;
    static IMAGEVIEW: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLER: number;
    static SIZEOF: number;
    static calloc(): VkDescriptorImageInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorImageInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorImageInfo;
    static create(paramarg0: number): VkDescriptorImageInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorImageInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorImageInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorImageInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimageLayout(paramarg0: number): number;
    static nimageLayout(paramarg0: number, paramarg1: number): void;
    static nimageView(paramarg0: number): number;
    static nimageView(paramarg0: number, paramarg1: number): void;
    static nsampler(paramarg0: number): number;
    static nsampler(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorImageInfo;
    imageLayout(): number;
    imageLayout(arg0: number): VkDescriptorImageInfo;
    imageView(): number;
    imageView(arg0: number): VkDescriptorImageInfo;
    sampler(): number;
    sampler(arg0: number): VkDescriptorImageInfo;
    set(arg0: number, arg1: number, arg2: number): VkDescriptorImageInfo;
    set(arg0: VkDescriptorImageInfo): VkDescriptorImageInfo;
    sizeof(): number;
}