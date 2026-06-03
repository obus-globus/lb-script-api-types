import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class StringsKt__AppendableKt extends Object {
    static append(paramarg0: Object | null, paramarg1: (Object | null)[]): Object | null;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): void;
    static appendRange(paramarg0: Object | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Object | null;
}