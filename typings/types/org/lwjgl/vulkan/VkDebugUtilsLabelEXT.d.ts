import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDebugUtilsLabelEXT extends Struct<VkDebugUtilsLabelEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOR: number;
    static PLABELNAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDebugUtilsLabelEXT;
    static calloc(paramarg0: MemoryStack): VkDebugUtilsLabelEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugUtilsLabelEXT;
    static create(paramarg0: number): VkDebugUtilsLabelEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugUtilsLabelEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugUtilsLabelEXT;
    static malloc(paramarg0: MemoryStack): VkDebugUtilsLabelEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolor(paramarg0: number, paramarg1: number): number;
    static ncolor(paramarg0: number): FloatBuffer;
    static ncolor(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncolor(paramarg0: number, paramarg1: FloatBuffer): void;
    static npLabelName(paramarg0: number): ByteBuffer;
    static npLabelName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npLabelNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    color(): FloatBuffer;
    color(arg0: FloatBuffer): VkDebugUtilsLabelEXT;
    color(arg0: number): number;
    color(arg0: number, arg1: number): VkDebugUtilsLabelEXT;
    create(arg0: number, arg1: ByteBuffer): VkDebugUtilsLabelEXT;
    pLabelName(): ByteBuffer;
    pLabelName(arg0: ByteBuffer): VkDebugUtilsLabelEXT;
    pLabelNameString(): string;
    pNext(): number;
    pNext(arg0: number): VkDebugUtilsLabelEXT;
    sType(): number;
    sType(arg0: number): VkDebugUtilsLabelEXT;
    sType$Default(): VkDebugUtilsLabelEXT;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: FloatBuffer): VkDebugUtilsLabelEXT;
    set(arg0: VkDebugUtilsLabelEXT): VkDebugUtilsLabelEXT;
    sizeof(): number;
}