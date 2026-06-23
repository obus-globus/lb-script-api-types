import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { AppendableJoiner } from '../../../../org/apache/commons/lang3/AppendableJoiner.d.ts'
import type { FailableBiConsumer } from '../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
export class AppendableJoiner$Builder<T extends unknown> extends Object implements Supplier<AppendableJoiner<T>> {
    constructor()
    // private appender: (param0: Appendable, param1: T) => void;
    // private delimiter: CharSequence;
    // private prefix: CharSequence;
    // private suffix: CharSequence;
    get(): AppendableJoiner<T>;
    setDelimiter(arg0: CharSequence): AppendableJoiner$Builder<T>;
    setElementAppender(arg0: (param0: Appendable, param1: T) => void): AppendableJoiner$Builder<T>;
    setPrefix(arg0: CharSequence): AppendableJoiner$Builder<T>;
    setSuffix(arg0: CharSequence): AppendableJoiner$Builder<T>;
}