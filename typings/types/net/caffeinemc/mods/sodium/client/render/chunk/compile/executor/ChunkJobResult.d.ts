import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../../../java/lang/Throwable.d.ts'
import type { JobEffort } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/JobEffort.d.ts'
export class ChunkJobResult<OUTPUT extends unknown> extends Object {
    static exceptionally(paramarg0: Throwable): ChunkJobResult<Object>;
    static successfully(paramarg0: Object | null): ChunkJobResult<Object>;
    static successfully(paramarg0: Object | null, paramarg1: JobEffort): ChunkJobResult<Object>;
    private constructor(arg0: OUTPUT, arg1: Throwable, arg2: JobEffort)
    readonly jobEffort: JobEffort;
    // private output: OUTPUT;
    // private throwable: Throwable;
    getJobEffort(): JobEffort;
    unwrap(): OUTPUT;
}