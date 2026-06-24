import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFormatProperties3 extends Struct<VkFormatProperties3> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERFEATURES: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LINEARTILINGFEATURES: number;
    static OPTIMALTILINGFEATURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFormatProperties3;
    static calloc(paramarg0: MemoryStack): VkFormatProperties3;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFormatProperties3;
    static create(paramarg0: number): VkFormatProperties3;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFormatProperties3;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFormatProperties3;
    static malloc(paramarg0: MemoryStack): VkFormatProperties3;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferFeatures(paramarg0: number): number;
    static nlinearTilingFeatures(paramarg0: number): number;
    static noptimalTilingFeatures(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferFeatures(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFormatProperties3;
    linearTilingFeatures(): number;
    optimalTilingFeatures(): number;
    pNext(): number;
    pNext(arg0: number): VkFormatProperties3;
    sType(): number;
    sType(arg0: number): VkFormatProperties3;
    sType$Default(): VkFormatProperties3;
    set(arg0: number, arg1: number): VkFormatProperties3;
    set(arg0: VkFormatProperties3): VkFormatProperties3;
    sizeof(): number;
}