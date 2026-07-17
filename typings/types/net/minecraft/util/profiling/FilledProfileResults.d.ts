import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FilledProfileResults$CounterCollector } from '../../../../net/minecraft/util/profiling/FilledProfileResults$CounterCollector.d.ts'
import type { ProfileResults } from '../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { ProfilerPathEntry } from '../../../../net/minecraft/util/profiling/ProfilerPathEntry.d.ts'
import type { ResultField } from '../../../../net/minecraft/util/profiling/ResultField.d.ts'
export class FilledProfileResults extends Object implements ProfileResults {
    static PATH_SEPARATOR: string;
    constructor(entries: JavaMap<string, ProfilerPathEntry>, startTimeNano: number, startTimeTicks: number, endTimeNano: number, endTimeTicks: number)
    readonly endTimeNano: number;
    readonly endTimeTicks: number;
    // private entries: JavaMap<string, ProfilerPathEntry>;
    readonly startTimeNano: number;
    readonly startTimeTicks: number;
    readonly tickDuration: number;
    // private appendCounterResults(depth: number, name: string, result: FilledProfileResults$CounterCollector, tickspan: number, builder: StringBuilder): void;
    // private appendCounters(counters: JavaMap<string, FilledProfileResults$CounterCollector>, builder: StringBuilder, tickspan: number): void;
    // private appendProfilerResults(depth: number, path: string, builder: StringBuilder): void;
    // private getCounterValues(): JavaMap<string, FilledProfileResults$CounterCollector>;
    getEndTimeNano(): number;
    getEndTimeTicks(): number;
    // private getEntry(path: string): ProfilerPathEntry;
    getNanoDuration(): number;
    getProfilerResults(): string;
    getProfilerResults(timespan: number, tickspan: number): string;
    getStartTimeNano(): number;
    getStartTimeTicks(): number;
    getTickDuration(): number;
    getTimes(path: string): ResultField[];
    saveResults(file: Path): boolean;
}