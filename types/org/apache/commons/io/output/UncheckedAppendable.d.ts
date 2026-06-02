import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export interface UncheckedAppendable extends Appendable, Object{
    append(arg0: string): UncheckedAppendable;
    append(arg0: CharSequence): UncheckedAppendable;
    append(arg0: CharSequence, arg1: number, arg2: number): UncheckedAppendable;
}