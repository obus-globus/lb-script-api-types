import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResultField } from '../../../../net/minecraft/util/profiling/ResultField.d.ts'
export interface ProfileResults extends Object{
    getEndTimeNano(): number;
    getEndTimeTicks(): number;
    getNanoDuration(): number;
    getProfilerResults(): string;
    getStartTimeNano(): number;
    getStartTimeTicks(): number;
    getTickDuration(): number;
    getTimes(path: string): ResultField[];
    saveResults(file: Path[]): boolean;
}