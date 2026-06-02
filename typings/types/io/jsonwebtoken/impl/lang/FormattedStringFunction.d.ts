import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FormattedStringFunction<T extends Object | number | string | boolean> extends Object implements Function<T, string> {
    constructor(arg0: string)
    // private msg: string;
    apply(arg0: T): string;
}