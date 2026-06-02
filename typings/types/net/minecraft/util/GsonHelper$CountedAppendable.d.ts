import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class GsonHelper$CountedAppendable extends Object implements Appendable {
    constructor(limit: number)
    // private limit: number;
    // private totalCount: number;
    // private accountChars(count: number): Appendable;
    append(c: string): Appendable;
    append(csq: CharSequence): Appendable;
    append(csq: CharSequence, start: number, end: number): Appendable;
}