import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcMslResourceBinding2 extends Struct<SpvcMslResourceBinding2> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COUNT: number;
    static DESC_SET: number;
    static MSL_BUFFER: number;
    static MSL_SAMPLER: number;
    static MSL_TEXTURE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STAGE: number;
    static calloc(): SpvcMslResourceBinding2;
    static calloc(paramarg0: MemoryStack): SpvcMslResourceBinding2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcMslResourceBinding2;
    static create(paramarg0: number): SpvcMslResourceBinding2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcMslResourceBinding2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcMslResourceBinding2;
    static malloc(paramarg0: MemoryStack): SpvcMslResourceBinding2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static ncount(paramarg0: number): number;
    static ncount(paramarg0: number, paramarg1: number): void;
    static ndesc_set(paramarg0: number): number;
    static ndesc_set(paramarg0: number, paramarg1: number): void;
    static nmsl_buffer(paramarg0: number): number;
    static nmsl_buffer(paramarg0: number, paramarg1: number): void;
    static nmsl_sampler(paramarg0: number): number;
    static nmsl_sampler(paramarg0: number, paramarg1: number): void;
    static nmsl_texture(paramarg0: number): number;
    static nmsl_texture(paramarg0: number, paramarg1: number): void;
    static nstage(paramarg0: number): number;
    static nstage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): SpvcMslResourceBinding2;
    close(): void;
    count(): number;
    count(arg0: number): SpvcMslResourceBinding2;
    create(arg0: number, arg1: ByteBuffer): SpvcMslResourceBinding2;
    desc_set(): number;
    desc_set(arg0: number): SpvcMslResourceBinding2;
    msl_buffer(): number;
    msl_buffer(arg0: number): SpvcMslResourceBinding2;
    msl_sampler(): number;
    msl_sampler(arg0: number): SpvcMslResourceBinding2;
    msl_texture(): number;
    msl_texture(arg0: number): SpvcMslResourceBinding2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): SpvcMslResourceBinding2;
    set(arg0: SpvcMslResourceBinding2): SpvcMslResourceBinding2;
    sizeof(): number;
    stage(): number;
    stage(arg0: number): SpvcMslResourceBinding2;
}