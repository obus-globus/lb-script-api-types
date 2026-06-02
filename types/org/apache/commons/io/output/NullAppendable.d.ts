import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class NullAppendable extends Object implements Appendable {
    static INSTANCE: NullAppendable;
    private constructor()
    append(arg0: string): Appendable;
    append(arg0: CharSequence): Appendable;
    append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
}