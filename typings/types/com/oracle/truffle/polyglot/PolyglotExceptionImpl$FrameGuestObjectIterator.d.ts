import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { PolyglotExceptionImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionImpl.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class PolyglotExceptionImpl$FrameGuestObjectIterator extends Object implements Iterator<Object> {
    constructor(apiAccess: AbstractPolyglotImpl$APIAccess, exception: PolyglotExceptionImpl, stackTrace: Object)
    // private apiAccess: AbstractPolyglotImpl$APIAccess;
    // private currentIndex: number;
    // private exception: PolyglotExceptionImpl;
    // private interop: InteropLibrary;
    // private next: Object;
    // private stackTrace: Object;
    // private fetchNext(): Object;
    forEachRemaining(arg0: (param0: Object) => void): void;
    hasNext(): boolean;
    next(): Object;
}