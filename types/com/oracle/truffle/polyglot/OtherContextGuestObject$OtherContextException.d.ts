import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
export class OtherContextGuestObject$OtherContextException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(receiverContext: PolyglotContextImpl, delegate: AbstractTruffleException, delegateContext: PolyglotContextImpl)
    constructor(thisContext: PolyglotContextImpl, delegate: Exception, delegateContext: PolyglotContextImpl)
    // private delegate: Exception;
    // private delegateContext: PolyglotContextImpl;
    // private receiverContext: PolyglotContextImpl;
}