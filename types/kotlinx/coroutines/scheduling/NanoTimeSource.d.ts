import type { SchedulerTimeSource } from '../../../kotlinx/coroutines/scheduling/SchedulerTimeSource.d.ts'
export class NanoTimeSource extends SchedulerTimeSource {
    static INSTANCE: NanoTimeSource;
    nanoTime(): number;
}