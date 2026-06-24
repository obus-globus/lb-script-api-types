import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoDecodeAV1CapabilitiesKHR extends Struct<VkVideoDecodeAV1CapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXLEVEL: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeAV1CapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeAV1CapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeAV1CapabilitiesKHR;
    static create(paramarg0: number): VkVideoDecodeAV1CapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeAV1CapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeAV1CapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeAV1CapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxLevel(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeAV1CapabilitiesKHR;
    maxLevel(): number;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeAV1CapabilitiesKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeAV1CapabilitiesKHR;
    sType$Default(): VkVideoDecodeAV1CapabilitiesKHR;
    set(arg0: number, arg1: number): VkVideoDecodeAV1CapabilitiesKHR;
    set(arg0: VkVideoDecodeAV1CapabilitiesKHR): VkVideoDecodeAV1CapabilitiesKHR;
    sizeof(): number;
}