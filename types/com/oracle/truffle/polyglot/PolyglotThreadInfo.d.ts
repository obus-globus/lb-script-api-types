import type { TruffleSafepoint$Interrupter } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interrupter.d.ts'
import type { SpecializationStatistics } from '../../../../com/oracle/truffle/api/dsl/SpecializationStatistics.d.ts'
import type { ProbeNode } from '../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { EncapsulatingNodeReference } from '../../../../com/oracle/truffle/api/nodes/EncapsulatingNodeReference.d.ts'
import type { TruffleWeakReference } from '../../../../com/oracle/truffle/api/utilities/TruffleWeakReference.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotThreadInfo$ClassLoaderEntry } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadInfo$ClassLoaderEntry.d.ts'
import type { PolyglotThreadInfo$SpecializationStatisticsEntry } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadInfo$SpecializationStatisticsEntry.d.ts'
import type { PolyglotThreadTask } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadTask.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
export class PolyglotThreadInfo extends Object {
    constructor(context: PolyglotContextImpl, thread: Thread, polyglotThreadTask: PolyglotThreadTask)
    // private cancelled: boolean;
    // private context: PolyglotContextImpl;
    contextThreadLocals: Object[];
    // private createdInExitContext: boolean;
    // private encapsulatingNodeReference: EncapsulatingNodeReference;
    // private enteredCount: number;
    // private executionStatisticsEntry: PolyglotThreadInfo$SpecializationStatisticsEntry;
    // private explicitContextStack: Object[][];
    // private explicitEnterAnchor: Context;
    // private fastThreadLocals: Object[];
    // private finalizationComplete: boolean;
    // private finalizingDeadThread: boolean;
    // private initializedLanguageContexts: BitSet;
    // private initializingLanguageContexts: BitSet;
    // private interruptSent: boolean;
    // private leaveAndEnterInterrupted: boolean;
    // private leaveAndEnterInterrupter: TruffleSafepoint$Interrupter;
    // private originalContextClassLoader: Object;
    // private polyglotThread: boolean;
    // private prevContextClassLoader: PolyglotThreadInfo$ClassLoaderEntry;
    // private probesEnterList: ProbeNode[];
    // private safepointActive: boolean;
    // private thread: TruffleWeakReference<Thread>;
    assertProbeEntered(probe: ProbeNode): void;
    assertProbeReturned(probe: ProbeNode): void;
    // private assertProbeThreadFinalized(): void;
    clearLanguageContextInitializing(languageContext: PolyglotLanguageContext): void;
    enterInternal(): Object[];
    // private enterStatistics(statistics: SpecializationStatistics): void;
    getContextThreadLocals(): Object[];
    getEnteredCount(): number;
    getLeaveAndEnterInterrupter(): TruffleSafepoint$Interrupter;
    getThread(): Thread;
    getThreadLocals(e: PolyglotEngineImpl): Object[];
    initializeLanguageContext(languageContext: PolyglotLanguageContext): void;
    initializedLanguageContextsCount(): number;
    isActive(): boolean;
    isActiveNotCancelled(): boolean;
    isCurrent(): boolean;
    isFinalizationComplete(): boolean;
    isFinalizingDeadThread(): boolean;
    isInLeaveAndEnter(): boolean;
    isLanguageContextInitialized(language: PolyglotLanguage): boolean;
    isLanguageContextInitializing(language: PolyglotLanguage): boolean;
    isPolyglotThread(): boolean;
    isSafepointActive(): boolean;
    leaveInternal(prev: Object[]): void;
    // private leaveStatistics(statistics: SpecializationStatistics): void;
    notifyEnter(engine: PolyglotEngineImpl, profiledContext: PolyglotContextImpl): void;
    notifyLeave(engine: PolyglotEngineImpl, profiledContext: PolyglotContextImpl): void;
    // private restoreContextClassLoader(): void;
    // private setContextClassLoader(): void;
    setContextThreadLocals(contextThreadLocals: Object[]): void;
    setFinalizationComplete(engine: PolyglotEngineImpl, mustSucceed: boolean): void;
    setFinalizingDeadThread(): void;
    setLanguageContextInitialized(languageContext: PolyglotLanguageContext): void;
    setLanguageContextInitializing(languageContext: PolyglotLanguageContext): void;
    setLeaveAndEnterInterrupter(interrupter: TruffleSafepoint$Interrupter): void;
    setSafepointActive(safepointActive: boolean): void;
    toString(): string;
}