import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPresentTimeGOOGLE extends Struct<VkPresentTimeGOOGLE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESIREDPRESENTTIME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTID: number;
    static SIZEOF: number;
    static calloc(): VkPresentTimeGOOGLE;
    static calloc(paramarg0: MemoryStack): VkPresentTimeGOOGLE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPresentTimeGOOGLE;
    static create(paramarg0: number): VkPresentTimeGOOGLE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPresentTimeGOOGLE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPresentTimeGOOGLE;
    static malloc(paramarg0: MemoryStack): VkPresentTimeGOOGLE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndesiredPresentTime(paramarg0: number): number;
    static ndesiredPresentTime(paramarg0: number, paramarg1: number): void;
    static npresentID(paramarg0: number): number;
    static npresentID(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPresentTimeGOOGLE;
    desiredPresentTime(): number;
    desiredPresentTime(arg0: number): VkPresentTimeGOOGLE;
    presentID(): number;
    presentID(arg0: number): VkPresentTimeGOOGLE;
    set(arg0: number, arg1: number): VkPresentTimeGOOGLE;
    set(arg0: VkPresentTimeGOOGLE): VkPresentTimeGOOGLE;
    sizeof(): number;
}