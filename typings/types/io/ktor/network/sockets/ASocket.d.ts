import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export interface ASocket extends Closeable, Object, DisposableHandle{
    readonly socketContext: Job;
    close(): void;
    dispose(): void;
}