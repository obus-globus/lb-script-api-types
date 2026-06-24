import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMultiviewPerViewAttributesInfoNVX extends Struct<VkMultiviewPerViewAttributesInfoNVX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PERVIEWATTRIBUTES: number;
    static PERVIEWATTRIBUTESPOSITIONXONLY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMultiviewPerViewAttributesInfoNVX;
    static calloc(paramarg0: MemoryStack): VkMultiviewPerViewAttributesInfoNVX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMultiviewPerViewAttributesInfoNVX;
    static create(paramarg0: number): VkMultiviewPerViewAttributesInfoNVX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMultiviewPerViewAttributesInfoNVX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMultiviewPerViewAttributesInfoNVX;
    static malloc(paramarg0: MemoryStack): VkMultiviewPerViewAttributesInfoNVX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nperViewAttributes(paramarg0: number): number;
    static nperViewAttributes(paramarg0: number, paramarg1: number): void;
    static nperViewAttributesPositionXOnly(paramarg0: number): number;
    static nperViewAttributesPositionXOnly(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMultiviewPerViewAttributesInfoNVX;
    pNext(): number;
    pNext(arg0: number): VkMultiviewPerViewAttributesInfoNVX;
    perViewAttributes(): boolean;
    perViewAttributes(arg0: boolean): VkMultiviewPerViewAttributesInfoNVX;
    perViewAttributesPositionXOnly(): boolean;
    perViewAttributesPositionXOnly(arg0: boolean): VkMultiviewPerViewAttributesInfoNVX;
    sType(): number;
    sType(arg0: number): VkMultiviewPerViewAttributesInfoNVX;
    sType$Default(): VkMultiviewPerViewAttributesInfoNVX;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkMultiviewPerViewAttributesInfoNVX;
    set(arg0: VkMultiviewPerViewAttributesInfoNVX): VkMultiviewPerViewAttributesInfoNVX;
    sizeof(): number;
}