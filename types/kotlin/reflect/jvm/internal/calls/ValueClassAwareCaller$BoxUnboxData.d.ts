import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueClassAwareCaller$BoxUnboxData extends Object {
    constructor(argumentRange: { start: number; endInclusive: number; step: number }, unboxParameters: (Method[] | null)[], box: Method | null)
    readonly argumentRange: { start: number; endInclusive: number; step: number };
    readonly box: Method | null;
    readonly unboxParameters: (Method[] | null)[];
}