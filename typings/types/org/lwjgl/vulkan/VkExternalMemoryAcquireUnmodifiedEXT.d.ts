import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExternalMemoryAcquireUnmodifiedEXT extends Struct<VkExternalMemoryAcquireUnmodifiedEXT> implements NativeResource {
    static ACQUIREUNMODIFIEDMEMORY: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalMemoryAcquireUnmodifiedEXT;
    static calloc(paramarg0: MemoryStack): VkExternalMemoryAcquireUnmodifiedEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalMemoryAcquireUnmodifiedEXT;
    static create(paramarg0: number): VkExternalMemoryAcquireUnmodifiedEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalMemoryAcquireUnmodifiedEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalMemoryAcquireUnmodifiedEXT;
    static malloc(paramarg0: MemoryStack): VkExternalMemoryAcquireUnmodifiedEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nacquireUnmodifiedMemory(paramarg0: number): number;
    static nacquireUnmodifiedMemory(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    acquireUnmodifiedMemory(): boolean;
    acquireUnmodifiedMemory(arg0: boolean): VkExternalMemoryAcquireUnmodifiedEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExternalMemoryAcquireUnmodifiedEXT;
    pNext(): number;
    pNext(arg0: number): VkExternalMemoryAcquireUnmodifiedEXT;
    sType(): number;
    sType(arg0: number): VkExternalMemoryAcquireUnmodifiedEXT;
    sType$Default(): VkExternalMemoryAcquireUnmodifiedEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkExternalMemoryAcquireUnmodifiedEXT;
    set(arg0: VkExternalMemoryAcquireUnmodifiedEXT): VkExternalMemoryAcquireUnmodifiedEXT;
    sizeof(): number;
}