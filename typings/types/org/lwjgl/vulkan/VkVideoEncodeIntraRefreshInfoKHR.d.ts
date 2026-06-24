import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeIntraRefreshInfoKHR extends Struct<VkVideoEncodeIntraRefreshInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INTRAREFRESHCYCLEDURATION: number;
    static INTRAREFRESHINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeIntraRefreshInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeIntraRefreshInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeIntraRefreshInfoKHR;
    static create(paramarg0: number): VkVideoEncodeIntraRefreshInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeIntraRefreshInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeIntraRefreshInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeIntraRefreshInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nintraRefreshCycleDuration(paramarg0: number): number;
    static nintraRefreshCycleDuration(paramarg0: number, paramarg1: number): void;
    static nintraRefreshIndex(paramarg0: number): number;
    static nintraRefreshIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeIntraRefreshInfoKHR;
    intraRefreshCycleDuration(): number;
    intraRefreshCycleDuration(arg0: number): VkVideoEncodeIntraRefreshInfoKHR;
    intraRefreshIndex(): number;
    intraRefreshIndex(arg0: number): VkVideoEncodeIntraRefreshInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeIntraRefreshInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeIntraRefreshInfoKHR;
    sType$Default(): VkVideoEncodeIntraRefreshInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkVideoEncodeIntraRefreshInfoKHR;
    set(arg0: VkVideoEncodeIntraRefreshInfoKHR): VkVideoEncodeIntraRefreshInfoKHR;
    sizeof(): number;
}