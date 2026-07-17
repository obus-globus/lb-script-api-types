import type { TriState } from '../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotIterator$Cache } from '../../../../com/oracle/truffle/polyglot/PolyglotIterator$Cache.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotWrapper } from '../../../../com/oracle/truffle/polyglot/PolyglotWrapper.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
export class PolyglotIterator<T extends unknown> extends Object implements PolyglotWrapper, Iterator<T> {
    constructor(elementClass: Class<T>, elementType: Type, array: Object, languageContext: PolyglotLanguageContext)
    // private cache: PolyglotIterator$Cache;
    // private concurrentlyModified: boolean;
    // private contextAnchor: Context;
    readonly guestObject: Object;
    readonly languageContext: PolyglotLanguageContext;
    // private lastHasNext: TriState;
    equals(o: Object | null): boolean;
    forEachRemaining(arg0: (param0: T) => void): void;
    getContext(): PolyglotContextImpl;
    getGuestObject(): Object;
    getLanguageContext(): PolyglotLanguageContext;
    hasNext(): boolean;
    hashCode(): number;
    next(): T;
    toString(): string;
}