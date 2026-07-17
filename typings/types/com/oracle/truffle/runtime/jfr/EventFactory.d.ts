import type { CompilationDequeuedEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationDequeuedEvent.d.ts'
import type { CompilationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationEvent.d.ts'
import type { CompilationQueuedEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationQueuedEvent.d.ts'
import type { CompilationStartedEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationStartedEvent.d.ts'
import type { CompilationStatisticsEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationStatisticsEvent.d.ts'
import type { DeoptimizationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/DeoptimizationEvent.d.ts'
import type { Event } from '../../../../../com/oracle/truffle/runtime/jfr/Event.d.ts'
import type { InvalidationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/InvalidationEvent.d.ts'
import type { ProfileResetEvent } from '../../../../../com/oracle/truffle/runtime/jfr/ProfileResetEvent.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EventFactory extends Object {
    addInitializationListener(listener: () => void): void;
    addPeriodicEvent(event: Class<Event>, producer: () => void): void;
    createCompilationDequeuedEvent(): CompilationDequeuedEvent;
    createCompilationEvent(): CompilationEvent;
    createCompilationQueuedEvent(): CompilationQueuedEvent;
    createCompilationStartedEvent(): CompilationStartedEvent;
    createCompilationStatisticsEvent(): CompilationStatisticsEvent;
    createDeoptimizationEvent(): DeoptimizationEvent;
    createInvalidationEvent(): InvalidationEvent;
    createProfileResetEvent(): ProfileResetEvent;
    getRequiredAnnotation(): Class<Annotation>;
    isInitialized(): boolean;
    removePeriodicEvent(event: Class<Event>, producer: () => void): void;
}