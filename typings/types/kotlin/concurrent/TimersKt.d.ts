import type { Timer } from '../../java/util/Timer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TimersKt extends Object {
    static timer(name: string | null, daemon: boolean): Timer;
}