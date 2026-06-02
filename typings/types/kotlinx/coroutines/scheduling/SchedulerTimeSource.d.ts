import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SchedulerTimeSource extends Object {
    constructor()
    nanoTime(): number;
}