import type { Interval } from '../../../org/ahocorasick/interval/Interval.d.ts'
import type { Intervalable } from '../../../org/ahocorasick/interval/Intervalable.d.ts'
export class Emit extends Interval implements Intervalable {
    constructor(arg0: number, arg1: number, arg2: string)
    readonly keyword: string;
    getKeyword(): string;
    toString(): string;
}