import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { HeapMonitor$ObjectWeakReference } from '../../../../../com/oracle/truffle/tools/profiler/HeapMonitor$ObjectWeakReference.d.ts'
import type { HeapSummary } from '../../../../../com/oracle/truffle/tools/profiler/HeapSummary.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
export class HeapMonitor extends Object implements Closeable {
    static find(paramengine: Engine): HeapMonitor;
    private constructor(env: TruffleInstrument$Env)
    // private activeBinding: EventBinding<Object>;
    // private closed: boolean;
    readonly collecting: boolean;
    // private env: TruffleInstrument$Env;
    // private initializedLanguages: Map<LanguageInfo, LanguageInfo>;
    // private newReferences: HeapMonitor$ObjectWeakReference[];
    // private processedReferences: HeapMonitor$ObjectWeakReference[];
    // private referenceExecutorService: ExecutorService;
    // private referenceFuture: Future<Object>;
    // private referenceQueue: ReferenceQueue<Object>;
    // private summaryData: Map<LanguageInfo, { [key: string]: HeapSummary }>;
    // private cleanReferenceQueue(): void;
    clearData(): void;
    close(): void;
    hasData(): boolean;
    isCollecting(): boolean;
    // private processNewReferences(): void;
    // private resetMonitor(): void;
    setCollecting(collecting: boolean): void;
    takeMetaObjectSummary(): Map<LanguageInfo, { [key: string]: HeapSummary }>;
    takeSummary(): HeapSummary;
}