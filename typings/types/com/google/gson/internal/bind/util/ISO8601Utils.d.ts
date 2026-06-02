import type { ParsePosition } from '../../../../../../java/text/ParsePosition.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ISO8601Utils extends Object {
    static format(paramarg0: Date): string;
    static format(paramarg0: Date, paramarg1: boolean): string;
    static format(paramarg0: Date, paramarg1: boolean, paramarg2: TimeZone): string;
    static parse(paramarg0: string, paramarg1: ParsePosition): Date;
    private constructor()
}