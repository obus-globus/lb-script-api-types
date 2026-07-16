import type { Object } from '../../java/lang/Object.d.ts'
export class TimingKt extends Object {
    static measureNanoTime(block: () => void): number;
    static measureTimeMillis(block: () => void): number;
}