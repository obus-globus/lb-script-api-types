import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDedicatedAllocationMemoryAllocateInfoNV extends Struct<VkDedicatedAllocationMemoryAllocateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDedicatedAllocationMemoryAllocateInfoNV;
    static calloc(paramarg0: MemoryStack): VkDedicatedAllocationMemoryAllocateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDedicatedAllocationMemoryAllocateInfoNV;
    static create(paramarg0: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDedicatedAllocationMemoryAllocateInfoNV;
    static malloc(paramarg0: MemoryStack): VkDedicatedAllocationMemoryAllocateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDedicatedAllocationMemoryAllocateInfoNV;
    image(): number;
    image(arg0: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    sType(): number;
    sType(arg0: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    sType$Default(): VkDedicatedAllocationMemoryAllocateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDedicatedAllocationMemoryAllocateInfoNV;
    set(arg0: VkDedicatedAllocationMemoryAllocateInfoNV): VkDedicatedAllocationMemoryAllocateInfoNV;
    sizeof(): number;
}