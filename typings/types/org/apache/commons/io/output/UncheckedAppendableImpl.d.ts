import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { UncheckedAppendable } from '../../../../../org/apache/commons/io/output/UncheckedAppendable.d.ts'
export class UncheckedAppendableImpl extends Object implements UncheckedAppendable {
    constructor(arg0: Appendable)
    // private appendable: Appendable;
    append(arg0: string): UncheckedAppendable;
    append(arg0: CharSequence): UncheckedAppendable;
    append(arg0: CharSequence, arg1: number, arg2: number): UncheckedAppendable;
    toString(): string;
}