import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoInlineQueryInfoKHR extends Struct<VkVideoInlineQueryInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTQUERY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUERYCOUNT: number;
    static QUERYPOOL: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoInlineQueryInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoInlineQueryInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoInlineQueryInfoKHR;
    static create(paramarg0: number): VkVideoInlineQueryInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoInlineQueryInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoInlineQueryInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoInlineQueryInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstQuery(paramarg0: number): number;
    static nfirstQuery(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nqueryCount(paramarg0: number): number;
    static nqueryCount(paramarg0: number, paramarg1: number): void;
    static nqueryPool(paramarg0: number): number;
    static nqueryPool(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoInlineQueryInfoKHR;
    firstQuery(): number;
    firstQuery(arg0: number): VkVideoInlineQueryInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoInlineQueryInfoKHR;
    queryCount(): number;
    queryCount(arg0: number): VkVideoInlineQueryInfoKHR;
    queryPool(): number;
    queryPool(arg0: number): VkVideoInlineQueryInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoInlineQueryInfoKHR;
    sType$Default(): VkVideoInlineQueryInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkVideoInlineQueryInfoKHR;
    set(arg0: VkVideoInlineQueryInfoKHR): VkVideoInlineQueryInfoKHR;
    sizeof(): number;
}