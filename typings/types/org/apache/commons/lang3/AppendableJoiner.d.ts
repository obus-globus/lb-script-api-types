import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { AppendableJoiner$Builder } from '../../../../org/apache/commons/lang3/AppendableJoiner$Builder.d.ts'
import type { FailableBiConsumer } from '../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
export class AppendableJoiner<T extends unknown> extends Object {
    static builder<T extends unknown>(): AppendableJoiner$Builder<T>;
    constructor(arg0: CharSequence, arg1: CharSequence, arg2: CharSequence, arg3: (param0: Object, param1: Object) => void, arg4: any)
    // private appender: (param0: Appendable, param1: T) => void;
    // private delimiter: CharSequence;
    // private prefix: CharSequence;
    // private suffix: CharSequence;
    join(arg0: StringBuilder, ...arg1: T[]): StringBuilder;
    join(arg0: StringBuilder, arg1: T[]): StringBuilder;
    joinA<A extends Appendable>(arg0: A, ...arg1: T[]): A;
    joinA<A extends Appendable>(arg0: A, arg1: T[]): A;
}