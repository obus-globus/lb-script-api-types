import type { Profiler$LiveSection } from '../../../../../org/spongepowered/asm/util/perf/Profiler$LiveSection.d.ts'
import type { Profiler$Section } from '../../../../../org/spongepowered/asm/util/perf/Profiler$Section.d.ts'
export class Profiler$SubSection extends Profiler$LiveSection {
    constructor(null_: Profiler$SubSection, arg1: string, arg2: number, arg3: string, arg4: Profiler$Section)
    readonly baseName: string;
    readonly root: Profiler$Section;
    end(): Profiler$Section;
    getBaseName(): string;
    getDelegate(): Profiler$Section;
    invalidate(): Profiler$Section;
    next(arg0: string): Profiler$Section;
    setInfo(arg0: string): void;
    start(): Profiler$Section;
}