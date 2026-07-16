import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectCommandsLayoutPushDataTokenNV extends Struct<VkIndirectCommandsLayoutPushDataTokenNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSHDATAOFFSET: number;
    static PUSHDATASIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkIndirectCommandsLayoutPushDataTokenNV;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutPushDataTokenNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsLayoutPushDataTokenNV;
    static create(paramarg0: number): VkIndirectCommandsLayoutPushDataTokenNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsLayoutPushDataTokenNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsLayoutPushDataTokenNV;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutPushDataTokenNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npushDataOffset(paramarg0: number): number;
    static npushDataOffset(paramarg0: number, paramarg1: number): void;
    static npushDataSize(paramarg0: number): number;
    static npushDataSize(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsLayoutPushDataTokenNV;
    pNext(): number;
    pNext(arg0: number): VkIndirectCommandsLayoutPushDataTokenNV;
    pushDataOffset(): number;
    pushDataOffset(arg0: number): VkIndirectCommandsLayoutPushDataTokenNV;
    pushDataSize(): number;
    pushDataSize(arg0: number): VkIndirectCommandsLayoutPushDataTokenNV;
    sType(): number;
    sType(arg0: number): VkIndirectCommandsLayoutPushDataTokenNV;
    sType$Default(): VkIndirectCommandsLayoutPushDataTokenNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkIndirectCommandsLayoutPushDataTokenNV;
    set(arg0: VkIndirectCommandsLayoutPushDataTokenNV): VkIndirectCommandsLayoutPushDataTokenNV;
    sizeof(): number;
}