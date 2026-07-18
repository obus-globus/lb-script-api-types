import type { CompilationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationEvent.d.ts'
import type { CompilationStatisticsEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationStatisticsEvent.d.ts'
import type { DeoptimizationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/DeoptimizationEvent.d.ts'
import type { Event } from '../../../../../com/oracle/truffle/runtime/jfr/Event.d.ts'
import type { InvalidationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/InvalidationEvent.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EventFactory extends Object {
    addInitializationListener(listener: () => void): void;
    addPeriodicEvent(event: Class<Event>, producer: () => void): void;
    createCompilationEvent(): CompilationEvent;
    createCompilationStatisticsEvent(): CompilationStatisticsEvent;
    createDeoptimizationEvent(): DeoptimizationEvent;
    createInvalidationEvent(): InvalidationEvent;
    getRequiredAnnotation(): Class<Annotation>;
    isInitialized(): boolean;
    removePeriodicEvent(event: Class<Event>, producer: () => void): void;
}