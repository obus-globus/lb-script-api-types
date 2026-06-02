import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { UnboundLocalDateTime$Companion } from '../../kotlin/time/UnboundLocalDateTime$Companion.d.ts'
export class UnboundLocalDateTime extends Object {
    static Companion: UnboundLocalDateTime$Companion;
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number)
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly month: number;
    readonly nanosecond: number;
    readonly second: number;
    readonly year: number;
    toInstant<T extends Object | number | string | boolean>(offsetSeconds: number, buildInstant: Function2<number, number, T>): T;
    toString(): string;
}