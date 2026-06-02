import type { Formattable } from '../../../../../java/util/Formattable.d.ts'
import type { Formatter } from '../../../../../java/util/Formatter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class FormattableUtils extends Object {
    static append(paramarg0: CharSequence, paramarg1: Formatter, paramarg2: number, paramarg3: number, paramarg4: number): Formatter;
    static append(paramarg0: CharSequence, paramarg1: Formatter, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: string): Formatter;
    static append(paramarg0: CharSequence, paramarg1: Formatter, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: string, paramarg6: CharSequence): Formatter;
    static append(paramarg0: CharSequence, paramarg1: Formatter, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: CharSequence): Formatter;
    static toString(paramarg0: Formattable): string;
    constructor()
}