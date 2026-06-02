import type { ProcessHandle$Info } from '../../java/lang/ProcessHandle$Info.d.ts'
import type { Optional } from '../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../java/util/concurrent/CompletableFuture.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface ProcessHandle extends Object, Comparable<ProcessHandle>{
    children(): Stream<ProcessHandle>;
    compareTo(arg0: ProcessHandle): number;
    descendants(): Stream<ProcessHandle>;
    destroy(): boolean;
    destroyForcibly(): boolean;
    info(): ProcessHandle$Info;
    isAlive(): boolean;
    onExit(): CompletableFuture<ProcessHandle>;
    parent(): Optional<ProcessHandle>;
    pid(): number;
    supportsNormalTermination(): boolean;
}