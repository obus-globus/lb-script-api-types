import type { ParserContext$Key } from '../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParserContext extends Object {
    static of(paramarg0: ParserContext$Key<Object>, paramarg1: Object | null): ParserContext;
    static of(): ParserContext;
    private constructor(arg0: Map<ParserContext$Key<Object>, Object>, arg1: boolean, arg2: boolean)
    // private copyOnWrite: boolean;
    // private hasNodeContext: boolean;
    // private map: Map<ParserContext$Key<Object>, Object>;
    contains(arg0: ParserContext$Key<Object>): boolean;
    copy(): ParserContext;
    copyWithoutNodeContext(): ParserContext;
    get<T extends unknown>(arg0: ParserContext$Key<T>): T;
    getOrElse<T extends unknown>(arg0: ParserContext$Key<T>, arg1: T): T;
    getOrElse<T extends unknown>(arg0: ParserContext$Key<T>, arg1: () => T): T;
    getOrThrow<T extends unknown>(arg0: ParserContext$Key<T>): T;
    with<T extends unknown>(arg0: ParserContext$Key<T>, arg1: T): ParserContext;
    withIfNotSet<T extends unknown>(arg0: ParserContext$Key<T>, arg1: T): ParserContext;
}