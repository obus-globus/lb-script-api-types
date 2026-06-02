import type { CompilationStatisticsEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/CompilationStatisticsEvent.d.ts'
import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
export class CompilationStatisticsEventImpl extends Event implements CompilationStatisticsEvent {
    constructor()
    bailouts: number;
    compiledCodeSize: number;
    compiledMethods: number;
    invalidations: number;
    peakTime: number;
    totalTime: number;
    publish(): void;
    setBailouts(bailoutsCount: number): void;
    setCompiledCodeSize(codeSize: number): void;
    setCompiledMethods(compiledMethodsCount: number): void;
    setInvalidations(invalidationsCount: number): void;
    setPeakTime(time: number): void;
    setTotalTime(time: number): void;
}