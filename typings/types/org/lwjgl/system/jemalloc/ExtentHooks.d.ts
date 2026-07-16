import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { ExtentAlloc } from '../../../../org/lwjgl/system/jemalloc/ExtentAlloc.d.ts'
import type { ExtentAllocI } from '../../../../org/lwjgl/system/jemalloc/ExtentAllocI.d.ts'
import type { ExtentCommit } from '../../../../org/lwjgl/system/jemalloc/ExtentCommit.d.ts'
import type { ExtentCommitI } from '../../../../org/lwjgl/system/jemalloc/ExtentCommitI.d.ts'
import type { ExtentDalloc } from '../../../../org/lwjgl/system/jemalloc/ExtentDalloc.d.ts'
import type { ExtentDallocI } from '../../../../org/lwjgl/system/jemalloc/ExtentDallocI.d.ts'
import type { ExtentDecommit } from '../../../../org/lwjgl/system/jemalloc/ExtentDecommit.d.ts'
import type { ExtentDecommitI } from '../../../../org/lwjgl/system/jemalloc/ExtentDecommitI.d.ts'
import type { ExtentDestroy } from '../../../../org/lwjgl/system/jemalloc/ExtentDestroy.d.ts'
import type { ExtentDestroyI } from '../../../../org/lwjgl/system/jemalloc/ExtentDestroyI.d.ts'
import type { ExtentMerge } from '../../../../org/lwjgl/system/jemalloc/ExtentMerge.d.ts'
import type { ExtentMergeI } from '../../../../org/lwjgl/system/jemalloc/ExtentMergeI.d.ts'
import type { ExtentPurge } from '../../../../org/lwjgl/system/jemalloc/ExtentPurge.d.ts'
import type { ExtentPurgeI } from '../../../../org/lwjgl/system/jemalloc/ExtentPurgeI.d.ts'
import type { ExtentSplit } from '../../../../org/lwjgl/system/jemalloc/ExtentSplit.d.ts'
import type { ExtentSplitI } from '../../../../org/lwjgl/system/jemalloc/ExtentSplitI.d.ts'
export class ExtentHooks extends Struct<ExtentHooks> implements NativeResource {
    static ALIGNOF: number;
    static ALLOC: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMIT: number;
    static DALLOC: number;
    static DECOMMIT: number;
    static DESTROY: number;
    static MERGE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PURGE_FORCED: number;
    static PURGE_LAZY: number;
    static SIZEOF: number;
    static SPLIT: number;
    static calloc(): ExtentHooks;
    static calloc(paramarg0: MemoryStack): ExtentHooks;
    static create(): ExtentHooks;
    static create(paramarg0: number): ExtentHooks;
    static createSafe(paramarg0: number): ExtentHooks;
    static malloc(): ExtentHooks;
    static malloc(paramarg0: MemoryStack): ExtentHooks;
    static nalloc(paramarg0: number): ExtentAlloc;
    static nalloc(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number): void;
    static ncommit(paramarg0: number): ExtentCommit;
    static ncommit(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): void;
    static ndalloc(paramarg0: number): ExtentDalloc;
    static ndalloc(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean): void;
    static ndecommit(paramarg0: number): ExtentDecommit;
    static ndecommit(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): void;
    static ndestroy(paramarg0: number): ExtentDestroy;
    static ndestroy(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean): void;
    static nmerge(paramarg0: number): ExtentMerge;
    static nmerge(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): void;
    static npurge_forced(paramarg0: number): ExtentPurge;
    static npurge_forced(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): void;
    static npurge_lazy(paramarg0: number): ExtentPurge;
    static npurge_lazy(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): void;
    static nsplit(paramarg0: number): ExtentSplit;
    static nsplit(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alloc(): ExtentAlloc;
    alloc(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number): ExtentHooks;
    close(): void;
    commit(): ExtentCommit;
    commit(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): ExtentHooks;
    create(arg0: number, arg1: ByteBuffer): ExtentHooks;
    dalloc(): ExtentDalloc;
    dalloc(arg0: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean): ExtentHooks;
    decommit(): ExtentDecommit;
    decommit(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): ExtentHooks;
    destroy(): ExtentDestroy;
    destroy(arg0: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean): ExtentHooks;
    merge(): ExtentMerge;
    merge(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): ExtentHooks;
    purge_forced(): ExtentPurge;
    purge_forced(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): ExtentHooks;
    purge_lazy(): ExtentPurge;
    purge_lazy(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean): ExtentHooks;
    set(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number, arg1: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean, arg2: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean, arg3: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean, arg4: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean, arg5: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean, arg6: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => boolean, arg7: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean, arg8: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): ExtentHooks;
    set(arg0: ExtentHooks): ExtentHooks;
    sizeof(): number;
    split(): ExtentSplit;
    split(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): ExtentHooks;
}