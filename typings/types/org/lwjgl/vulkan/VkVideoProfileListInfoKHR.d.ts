import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoProfileListInfoKHR extends Struct<VkVideoProfileListInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPROFILES: number;
    static PROFILECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoProfileListInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoProfileListInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoProfileListInfoKHR;
    static create(paramarg0: number): VkVideoProfileListInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoProfileListInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoProfileListInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoProfileListInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npProfiles(paramarg0: number): (Object | null)[];
    static npProfiles(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nprofileCount(paramarg0: number): number;
    static nprofileCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoProfileListInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoProfileListInfoKHR;
    pProfiles(): (Object | null)[];
    pProfiles(arg0: (Object | null)[]): VkVideoProfileListInfoKHR;
    profileCount(): number;
    sType(): number;
    sType(arg0: number): VkVideoProfileListInfoKHR;
    sType$Default(): VkVideoProfileListInfoKHR;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkVideoProfileListInfoKHR;
    set(arg0: VkVideoProfileListInfoKHR): VkVideoProfileListInfoKHR;
    sizeof(): number;
}