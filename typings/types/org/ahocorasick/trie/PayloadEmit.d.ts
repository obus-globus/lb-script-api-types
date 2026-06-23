import type { Object } from '../../../java/lang/Object.d.ts'
import type { Interval } from '../../../org/ahocorasick/interval/Interval.d.ts'
import type { Intervalable } from '../../../org/ahocorasick/interval/Intervalable.d.ts'
export class PayloadEmit<T extends unknown> extends Interval implements Intervalable {
    constructor(arg0: number, arg1: number, arg2: string, arg3: T)
    readonly keyword: string;
    readonly payload: T;
    getKeyword(): string;
    getPayload(): T;
    toString(): string;
}