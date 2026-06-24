import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH264SessionCreateInfoKHR extends Struct<VkVideoEncodeH264SessionCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXLEVELIDC: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USEMAXLEVELIDC: number;
    static calloc(): VkVideoEncodeH264SessionCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264SessionCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264SessionCreateInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264SessionCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264SessionCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264SessionCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264SessionCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxLevelIdc(paramarg0: number): number;
    static nmaxLevelIdc(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuseMaxLevelIdc(paramarg0: number): number;
    static nuseMaxLevelIdc(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264SessionCreateInfoKHR;
    maxLevelIdc(): number;
    maxLevelIdc(arg0: number): VkVideoEncodeH264SessionCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264SessionCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264SessionCreateInfoKHR;
    sType$Default(): VkVideoEncodeH264SessionCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number): VkVideoEncodeH264SessionCreateInfoKHR;
    set(arg0: VkVideoEncodeH264SessionCreateInfoKHR): VkVideoEncodeH264SessionCreateInfoKHR;
    sizeof(): number;
    useMaxLevelIdc(): boolean;
    useMaxLevelIdc(arg0: boolean): VkVideoEncodeH264SessionCreateInfoKHR;
}