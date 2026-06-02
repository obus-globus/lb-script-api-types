import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfileResults } from '../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { ResultField } from '../../../../net/minecraft/util/profiling/ResultField.d.ts'
export class EmptyProfileResults extends Object implements ProfileResults {
    static EMPTY: EmptyProfileResults;
    static PATH_SEPARATOR: string;
    static demanglePath(parampath: string): string;
    private constructor()
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