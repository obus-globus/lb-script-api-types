import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OtherContextGuestObject extends Object implements TruffleObject {
    constructor(receiverContext: PolyglotContextImpl, delegate: Object, delegateContext: PolyglotContextImpl)
    // private delegate: Object;
    // private delegateContext: PolyglotContextImpl;
    // private receiverContext: PolyglotContextImpl;
    toString(): string;
}