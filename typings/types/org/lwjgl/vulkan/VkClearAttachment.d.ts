import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClearValue } from '../../../org/lwjgl/vulkan/VkClearValue.d.ts'
export class VkClearAttachment extends Struct<VkClearAttachment> implements NativeResource {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLEARVALUE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkClearAttachment;
    static calloc(paramarg0: MemoryStack): VkClearAttachment;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClearAttachment;
    static create(paramarg0: number): VkClearAttachment;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClearAttachment;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClearAttachment;
    static malloc(paramarg0: MemoryStack): VkClearAttachment;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static nclearValue(paramarg0: number): VkClearValue;
    static nclearValue(paramarg0: number, paramarg1: VkClearValue): void;
    static ncolorAttachment(paramarg0: number): number;
    static ncolorAttachment(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    aspectMask(arg0: number): VkClearAttachment;
    clearValue(): VkClearValue;
    clearValue(arg0: (param0: VkClearValue) => void): VkClearAttachment;
    clearValue(arg0: VkClearValue): VkClearAttachment;
    close(): void;
    colorAttachment(): number;
    colorAttachment(arg0: number): VkClearAttachment;
    create(arg0: number, arg1: ByteBuffer): VkClearAttachment;
    set(arg0: number, arg1: number, arg2: VkClearValue): VkClearAttachment;
    set(arg0: VkClearAttachment): VkClearAttachment;
    sizeof(): number;
}