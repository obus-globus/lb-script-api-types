import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcHlslVertexAttributeRemap extends Struct<SpvcHlslVertexAttributeRemap> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LOCATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMANTIC: number;
    static SIZEOF: number;
    static calloc(): SpvcHlslVertexAttributeRemap;
    static calloc(paramarg0: MemoryStack): SpvcHlslVertexAttributeRemap;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcHlslVertexAttributeRemap;
    static create(paramarg0: number): SpvcHlslVertexAttributeRemap;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcHlslVertexAttributeRemap;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcHlslVertexAttributeRemap;
    static malloc(paramarg0: MemoryStack): SpvcHlslVertexAttributeRemap;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlocation(paramarg0: number): number;
    static nlocation(paramarg0: number, paramarg1: number): void;
    static nsemantic(paramarg0: number): ByteBuffer;
    static nsemantic(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsemanticString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcHlslVertexAttributeRemap;
    location(): number;
    location(arg0: number): SpvcHlslVertexAttributeRemap;
    semantic(): ByteBuffer;
    semantic(arg0: ByteBuffer): SpvcHlslVertexAttributeRemap;
    semanticString(): string;
    set(arg0: number, arg1: ByteBuffer): SpvcHlslVertexAttributeRemap;
    set(arg0: SpvcHlslVertexAttributeRemap): SpvcHlslVertexAttributeRemap;
    sizeof(): number;
}