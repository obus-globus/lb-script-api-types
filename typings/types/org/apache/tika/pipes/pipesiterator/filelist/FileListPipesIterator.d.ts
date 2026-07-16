import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FetchEmitTuple } from '../../../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
export class FileListPipesIterator {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static COMPLETED_SEMAPHORE: FetchEmitTuple;
    static DEFAULT_MAX_WAIT_MS: number;
    static DEFAULT_QUEUE_SIZE: number;
    static build(paramarg0: Path): FetchEmitTuple[];
}