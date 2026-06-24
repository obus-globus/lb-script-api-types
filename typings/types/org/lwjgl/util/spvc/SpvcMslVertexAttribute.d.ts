import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcMslVertexAttribute extends Struct<SpvcMslVertexAttribute> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUILTIN: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static LOCATION: number;
    static MSL_BUFFER: number;
    static MSL_OFFSET: number;
    static MSL_STRIDE: number;
    static PER_INSTANCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): SpvcMslVertexAttribute;
    static calloc(paramarg0: MemoryStack): SpvcMslVertexAttribute;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcMslVertexAttribute;
    static create(paramarg0: number): SpvcMslVertexAttribute;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcMslVertexAttribute;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcMslVertexAttribute;
    static malloc(paramarg0: MemoryStack): SpvcMslVertexAttribute;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuiltin(paramarg0: number): number;
    static nbuiltin(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nlocation(paramarg0: number): number;
    static nlocation(paramarg0: number, paramarg1: number): void;
    static nmsl_buffer(paramarg0: number): number;
    static nmsl_buffer(paramarg0: number, paramarg1: number): void;
    static nmsl_offset(paramarg0: number): number;
    static nmsl_offset(paramarg0: number, paramarg1: number): void;
    static nmsl_stride(paramarg0: number): number;
    static nmsl_stride(paramarg0: number, paramarg1: number): void;
    static nper_instance(paramarg0: number): boolean;
    static nper_instance(paramarg0: number, paramarg1: boolean): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    builtin(): number;
    builtin(arg0: number): SpvcMslVertexAttribute;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcMslVertexAttribute;
    format(): number;
    format(arg0: number): SpvcMslVertexAttribute;
    location(): number;
    location(arg0: number): SpvcMslVertexAttribute;
    msl_buffer(): number;
    msl_buffer(arg0: number): SpvcMslVertexAttribute;
    msl_offset(): number;
    msl_offset(arg0: number): SpvcMslVertexAttribute;
    msl_stride(): number;
    msl_stride(arg0: number): SpvcMslVertexAttribute;
    per_instance(): boolean;
    per_instance(arg0: boolean): SpvcMslVertexAttribute;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number): SpvcMslVertexAttribute;
    set(arg0: SpvcMslVertexAttribute): SpvcMslVertexAttribute;
    sizeof(): number;
}