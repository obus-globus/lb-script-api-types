import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PrettyPrinter } from '../../../../../org/spongepowered/asm/util/PrettyPrinter.d.ts'
import type { Profiler$Section } from '../../../../../org/spongepowered/asm/util/perf/Profiler$Section.d.ts'
export class Profiler extends Object {
    static FINE: number;
    static ROOT: number;
    static getProfiler(paramarg0: string): Profiler;
    static getProfilers(): Profiler[];
    static printAuditSummary(): void;
    static setActive(paramarg0: boolean): void;
    constructor(arg0: string)
    // private id: string;
    // private phases: string[];
    readonly sections: JavaMap<string, Profiler$Section>;
    // private stack: Profiler$Section[];
    begin(...arg0: string[]): Profiler$Section;
    begin(arg0: number, ...arg1: string[]): Profiler$Section;
    begin(arg0: number, arg1: string): Profiler$Section;
    begin(arg0: string): Profiler$Section;
    end(arg0: Profiler$Section): void;
    get(arg0: string): Profiler$Section;
    getSections(): Profiler$Section[];
    // private getSubSection(arg0: string, arg1: string, arg2: Profiler$Section): Profiler$Section;
    mark(arg0: string): void;
    printSummary(): void;
    printer(arg0: boolean, arg1: boolean): PrettyPrinter;
    reset(): void;
    toString(): string;
}