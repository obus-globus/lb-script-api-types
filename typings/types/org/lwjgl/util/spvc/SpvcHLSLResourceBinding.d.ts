import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { SpvcHLSLResourceBindingMapping } from '../../../../org/lwjgl/util/spvc/SpvcHLSLResourceBindingMapping.d.ts'
export class SpvcHLSLResourceBinding extends Struct<SpvcHLSLResourceBinding> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CBV: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESC_SET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLER: number;
    static SIZEOF: number;
    static SRV: number;
    static STAGE: number;
    static UAV: number;
    static calloc(): SpvcHLSLResourceBinding;
    static calloc(paramarg0: MemoryStack): SpvcHLSLResourceBinding;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcHLSLResourceBinding;
    static create(paramarg0: number): SpvcHLSLResourceBinding;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcHLSLResourceBinding;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcHLSLResourceBinding;
    static malloc(paramarg0: MemoryStack): SpvcHLSLResourceBinding;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static ncbv(paramarg0: number): SpvcHLSLResourceBindingMapping;
    static ncbv(paramarg0: number, paramarg1: SpvcHLSLResourceBindingMapping): void;
    static ndesc_set(paramarg0: number): number;
    static ndesc_set(paramarg0: number, paramarg1: number): void;
    static nsampler(paramarg0: number): SpvcHLSLResourceBindingMapping;
    static nsampler(paramarg0: number, paramarg1: SpvcHLSLResourceBindingMapping): void;
    static nsrv(paramarg0: number): SpvcHLSLResourceBindingMapping;
    static nsrv(paramarg0: number, paramarg1: SpvcHLSLResourceBindingMapping): void;
    static nstage(paramarg0: number): number;
    static nstage(paramarg0: number, paramarg1: number): void;
    static nuav(paramarg0: number): SpvcHLSLResourceBindingMapping;
    static nuav(paramarg0: number, paramarg1: SpvcHLSLResourceBindingMapping): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): SpvcHLSLResourceBinding;
    cbv(): SpvcHLSLResourceBindingMapping;
    cbv(arg0: (param0: SpvcHLSLResourceBindingMapping) => void): SpvcHLSLResourceBinding;
    cbv(arg0: SpvcHLSLResourceBindingMapping): SpvcHLSLResourceBinding;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcHLSLResourceBinding;
    desc_set(): number;
    desc_set(arg0: number): SpvcHLSLResourceBinding;
    sampler(): SpvcHLSLResourceBindingMapping;
    sampler(arg0: (param0: SpvcHLSLResourceBindingMapping) => void): SpvcHLSLResourceBinding;
    sampler(arg0: SpvcHLSLResourceBindingMapping): SpvcHLSLResourceBinding;
    set(arg0: number, arg1: number, arg2: number, arg3: SpvcHLSLResourceBindingMapping, arg4: SpvcHLSLResourceBindingMapping, arg5: SpvcHLSLResourceBindingMapping, arg6: SpvcHLSLResourceBindingMapping): SpvcHLSLResourceBinding;
    set(arg0: SpvcHLSLResourceBinding): SpvcHLSLResourceBinding;
    sizeof(): number;
    srv(): SpvcHLSLResourceBindingMapping;
    srv(arg0: (param0: SpvcHLSLResourceBindingMapping) => void): SpvcHLSLResourceBinding;
    srv(arg0: SpvcHLSLResourceBindingMapping): SpvcHLSLResourceBinding;
    stage(): number;
    stage(arg0: number): SpvcHLSLResourceBinding;
    uav(): SpvcHLSLResourceBindingMapping;
    uav(arg0: (param0: SpvcHLSLResourceBindingMapping) => void): SpvcHLSLResourceBinding;
    uav(arg0: SpvcHLSLResourceBindingMapping): SpvcHLSLResourceBinding;
}