import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDisplayPlaneInfo2KHR extends Struct<VkDisplayPlaneInfo2KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MODE: number;
    static PLANEINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDisplayPlaneInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkDisplayPlaneInfo2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayPlaneInfo2KHR;
    static create(paramarg0: number): VkDisplayPlaneInfo2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayPlaneInfo2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayPlaneInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkDisplayPlaneInfo2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nplaneIndex(paramarg0: number): number;
    static nplaneIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayPlaneInfo2KHR;
    mode(): number;
    mode(arg0: number): VkDisplayPlaneInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkDisplayPlaneInfo2KHR;
    planeIndex(): number;
    planeIndex(arg0: number): VkDisplayPlaneInfo2KHR;
    sType(): number;
    sType(arg0: number): VkDisplayPlaneInfo2KHR;
    sType$Default(): VkDisplayPlaneInfo2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDisplayPlaneInfo2KHR;
    set(arg0: VkDisplayPlaneInfo2KHR): VkDisplayPlaneInfo2KHR;
    sizeof(): number;
}