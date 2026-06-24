import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPastPresentationTimingGOOGLE extends Struct<VkPastPresentationTimingGOOGLE> implements NativeResource {
    static ACTUALPRESENTTIME: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESIREDPRESENTTIME: number;
    static EARLIESTPRESENTTIME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTID: number;
    static PRESENTMARGIN: number;
    static SIZEOF: number;
    static calloc(): VkPastPresentationTimingGOOGLE;
    static calloc(paramarg0: MemoryStack): VkPastPresentationTimingGOOGLE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPastPresentationTimingGOOGLE;
    static create(paramarg0: number): VkPastPresentationTimingGOOGLE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPastPresentationTimingGOOGLE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPastPresentationTimingGOOGLE;
    static malloc(paramarg0: MemoryStack): VkPastPresentationTimingGOOGLE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nactualPresentTime(paramarg0: number): number;
    static ndesiredPresentTime(paramarg0: number): number;
    static nearliestPresentTime(paramarg0: number): number;
    static npresentID(paramarg0: number): number;
    static npresentMargin(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    actualPresentTime(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPastPresentationTimingGOOGLE;
    desiredPresentTime(): number;
    earliestPresentTime(): number;
    presentID(): number;
    presentMargin(): number;
    sizeof(): number;
}