import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class StringsKt__AppendableKt extends Object {
    static append(paramarg0: Appendable | null, paramarg1: (Object | null)[]): Appendable | null;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: (param0: Object) => CharSequence): void;
    static appendRange(paramarg0: Appendable | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Appendable | null;
}