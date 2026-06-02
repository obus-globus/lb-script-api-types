import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Profiler$Scope } from '../../../../net/minecraft/util/profiling/Profiler$Scope.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class Profiler extends Object {
    static get(): ProfilerFiller;
    static use(paramfiller: ProfilerFiller): Profiler$Scope;
    private constructor()
}