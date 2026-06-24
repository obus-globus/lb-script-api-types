import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoDecodeAV1ProfileInfoKHR extends Struct<VkVideoDecodeAV1ProfileInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FILMGRAINSUPPORT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STDPROFILE: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeAV1ProfileInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeAV1ProfileInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeAV1ProfileInfoKHR;
    static create(paramarg0: number): VkVideoDecodeAV1ProfileInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeAV1ProfileInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeAV1ProfileInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeAV1ProfileInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfilmGrainSupport(paramarg0: number): number;
    static nfilmGrainSupport(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdProfile(paramarg0: number): number;
    static nstdProfile(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeAV1ProfileInfoKHR;
    filmGrainSupport(): boolean;
    filmGrainSupport(arg0: boolean): VkVideoDecodeAV1ProfileInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeAV1ProfileInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeAV1ProfileInfoKHR;
    sType$Default(): VkVideoDecodeAV1ProfileInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean): VkVideoDecodeAV1ProfileInfoKHR;
    set(arg0: VkVideoDecodeAV1ProfileInfoKHR): VkVideoDecodeAV1ProfileInfoKHR;
    sizeof(): number;
    stdProfile(): number;
    stdProfile(arg0: number): VkVideoDecodeAV1ProfileInfoKHR;
}