import type { Event } from '../../../../../com/oracle/truffle/runtime/jfr/Event.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CompilationStatisticsEvent extends Event, Object{
    setBailouts(bailouts: number): void;
    setCompiledCodeSize(size: number): void;
    setCompiledMethods(compiledMethods: number): void;
    setInvalidations(invalidations: number): void;
    setPeakTime(time: number): void;
    setTotalTime(time: number): void;
}