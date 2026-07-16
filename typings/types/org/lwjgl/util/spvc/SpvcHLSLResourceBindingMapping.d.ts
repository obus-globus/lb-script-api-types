import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcHLSLResourceBindingMapping extends Struct<SpvcHLSLResourceBindingMapping> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REGISTER_BINDING: number;
    static REGISTER_SPACE: number;
    static SIZEOF: number;
    static calloc(): SpvcHLSLResourceBindingMapping;
    static calloc(paramarg0: MemoryStack): SpvcHLSLResourceBindingMapping;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcHLSLResourceBindingMapping;
    static create(paramarg0: number): SpvcHLSLResourceBindingMapping;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcHLSLResourceBindingMapping;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcHLSLResourceBindingMapping;
    static malloc(paramarg0: MemoryStack): SpvcHLSLResourceBindingMapping;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nregister_binding(paramarg0: number): number;
    static nregister_binding(paramarg0: number, paramarg1: number): void;
    static nregister_space(paramarg0: number): number;
    static nregister_space(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcHLSLResourceBindingMapping;
    register_binding(): number;
    register_binding(arg0: number): SpvcHLSLResourceBindingMapping;
    register_space(): number;
    register_space(arg0: number): SpvcHLSLResourceBindingMapping;
    set(arg0: number, arg1: number): SpvcHLSLResourceBindingMapping;
    set(arg0: SpvcHLSLResourceBindingMapping): SpvcHLSLResourceBindingMapping;
    sizeof(): number;
}