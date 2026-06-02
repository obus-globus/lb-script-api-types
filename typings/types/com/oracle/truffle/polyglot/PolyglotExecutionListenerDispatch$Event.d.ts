import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PolyglotExecutionListenerDispatch$Event extends Object{
    getContext(): EventContext;
    getEngine(): PolyglotEngineImpl;
    getException(): RuntimeException;
    getInputValues(): Object[];
    getLocation(): Object;
    getReturnValue(): Object;
    getRootName(): string;
}