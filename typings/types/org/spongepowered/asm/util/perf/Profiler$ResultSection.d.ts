import type { Profiler$Section } from '../../../../../org/spongepowered/asm/util/perf/Profiler$Section.d.ts'
export class Profiler$ResultSection extends Profiler$Section {
    constructor(arg0: string)
    // private sections: Profiler$Section[];
    add(arg0: Profiler$Section): void;
    getAverageTime(): number;
    getCount(): number;
    getMarkedCount(): number;
    getMarkedTime(): number;
    getSeconds(): number;
    getTime(): number;
    getTimes(): number[];
    getTotalAverageTime(): number;
    getTotalCount(): number;
    getTotalSeconds(): number;
    getTotalTime(): number;
}