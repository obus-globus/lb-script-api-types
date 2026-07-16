import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkBindMemoryStatus extends Struct<VkBindMemoryStatus> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESULT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindMemoryStatus;
    static calloc(paramarg0: MemoryStack): VkBindMemoryStatus;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindMemoryStatus;
    static create(paramarg0: number): VkBindMemoryStatus;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindMemoryStatus;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindMemoryStatus;
    static malloc(paramarg0: MemoryStack): VkBindMemoryStatus;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npResult(paramarg0: number, paramarg1: number): IntBuffer;
    static npResult(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindMemoryStatus;
    pNext(): number;
    pNext(arg0: number): VkBindMemoryStatus;
    pResult(arg0: IntBuffer): VkBindMemoryStatus;
    pResult(arg0: number): IntBuffer;
    sType(): number;
    sType(arg0: number): VkBindMemoryStatus;
    sType$Default(): VkBindMemoryStatus;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkBindMemoryStatus;
    set(arg0: VkBindMemoryStatus): VkBindMemoryStatus;
    sizeof(): number;
}