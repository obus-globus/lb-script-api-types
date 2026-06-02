import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { SourceInstrumentationHandler$SourcesNotificationQueue } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler$SourcesNotificationQueue.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceInstrumentationHandler extends Object {
    constructor(notificationConsumer: (param0: EventBinding$Source<Object>[], param1: Source) => void)
    // private bindings: EventBinding$Source<Object>[];
    // private bindingsLock: ReentrantReadWriteLock;
    // private notificationConsumer: (param0: EventBinding$Source<Object>[], param1: Source) => void;
    // private notifications: SourceInstrumentationHandler$SourcesNotificationQueue;
    // private sources: Map<Source, void>;
    // private sourcesInitialized: AtomicBoolean;
    // private sourcesList: Source[];
    // private addAllSourcesNotification(binding: EventBinding$Source<Object>): SourceInstrumentationHandler$SourcesNotificationQueue;
    addBinding(binding: EventBinding$Source<Object>, notify: boolean): SourceInstrumentationHandler$SourcesNotificationQueue;
    // private addInitializeSourcesNotification(): SourceInstrumentationHandler$SourcesNotificationQueue;
    addNewSources(newSources: Map<Source, void>, notify: boolean): SourceInstrumentationHandler$SourcesNotificationQueue;
    // private addNotification(collectedSources: Map<Source, void>, bindingsToNotify: EventBinding$Source<Object>[]): SourceInstrumentationHandler$SourcesNotificationQueue;
    clearAll(): void;
    // private clearAllInternal(): void;
    clearForDisposedBinding(disposedBinding: EventBinding$Source<Object>): void;
    clearForDisposedInstrumenter(disposedInstrumenter: InstrumentationHandler$AbstractInstrumenter): void;
    getBindingsArray(): EventBinding$Source<Object>[];
    hasBindings(): boolean;
    setInitialized(): void;
}