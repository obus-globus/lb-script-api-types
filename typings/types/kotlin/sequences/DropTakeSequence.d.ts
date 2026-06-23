import type { Object } from '../../java/lang/Object.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export interface DropTakeSequence<T extends unknown> extends Object, Sequence<T>{
    drop(n: number): Sequence<T>;
    take(n: number): Sequence<T>;
}