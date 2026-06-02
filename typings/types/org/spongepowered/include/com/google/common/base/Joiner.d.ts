import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Joiner$MapJoiner } from '../../../../../../../org/spongepowered/include/com/google/common/base/Joiner$MapJoiner.d.ts'
export class Joiner extends Object {
    static on(paramarg0: string): Joiner;
    static on(paramarg0: string): Joiner;
    private constructor(arg0: string)
    private constructor(arg0: Joiner)
    // private separator: string;
    appendTo<A extends Appendable>(arg0: A, arg1: Iterator<Object>): A;
    appendTo(arg0: StringBuilder, arg1: Iterator<Object>): StringBuilder;
    join(arg0: Object[]): string;
    join(arg0: (Object | null)[]): string;
    join(arg0: Iterator<Object>): string;
    toString(arg0: Object): CharSequence;
    useForNull(arg0: string): Joiner;
    withKeyValueSeparator(arg0: string): Joiner$MapJoiner;
}