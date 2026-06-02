import type { Profiler$Section } from '../../../../../org/spongepowered/asm/util/perf/Profiler$Section.d.ts'
export class Profiler$DisabledSection extends Profiler$Section {
    constructor(null_: Profiler$DisabledSection, arg1: string)
    end(): Profiler$Section;
    next(arg0: string): Profiler$Section;
}