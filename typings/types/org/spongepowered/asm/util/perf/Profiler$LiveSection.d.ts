import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
import type { Profiler$DisabledSection } from '../../../../../org/spongepowered/asm/util/perf/Profiler$DisabledSection.d.ts'
import type { Profiler$Section } from '../../../../../org/spongepowered/asm/util/perf/Profiler$Section.d.ts'
export class Profiler$LiveSection extends Profiler$DisabledSection {
    constructor(null_: Profiler, arg1: string, arg2: number)
    readonly count: number;
    // private cursor: number;
    // private markedCount: number;
    // private markedTime: number;
    // private start: number;
    readonly time: number;
    readonly times: number[];
    end(): Profiler$Section;
    getAverageTime(): number;
    getCount(): number;
    getCursor(): number;
    getMarkedCount(): number;
    getMarkedTime(): number;
    getSeconds(): number;
    getTime(): number;
    getTimes(): number[];
    getTotalAverageTime(): number;
    getTotalCount(): number;
    getTotalSeconds(): number;
    getTotalTime(): number;
    mark(): void;
    start(): Profiler$Section;
    stop(): Profiler$Section;
}