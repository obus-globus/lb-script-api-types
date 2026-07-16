import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_LayerIterator extends Struct<FT_LayerIterator> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYER: number;
    static NUM_LAYERS: number;
    static P: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_LayerIterator;
    static calloc(paramarg0: MemoryStack): FT_LayerIterator;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_LayerIterator;
    static create(paramarg0: number): FT_LayerIterator;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_LayerIterator;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_LayerIterator;
    static malloc(paramarg0: MemoryStack): FT_LayerIterator;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlayer(paramarg0: number): number;
    static nnum_layers(paramarg0: number): number;
    static np(paramarg0: number, paramarg1: number): ByteBuffer;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_LayerIterator;
    layer(): number;
    num_layers(): number;
    p(arg0: number): ByteBuffer;
    sizeof(): number;
}