import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { EventBinding } from '../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLimits } from '../../../../com/oracle/truffle/polyglot/PolyglotLimits.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotLimits$EngineLimits extends Object {
    constructor(engine: PolyglotEngineImpl)
    // private engine: PolyglotEngineImpl;
    // private sameStatementLimit: Assumption;
    // private statementLimit: number;
    // private statementLimitBinding: EventBinding<Object>;
    // private statementLimitSourcePredicate: (param0: Object) => boolean;
    getStatementLimit(): number;
    initialize(limits: PolyglotLimits, context: PolyglotContextImpl): void;
    notifyEvent(context: PolyglotContextImpl): RuntimeException;
    validate(limits: PolyglotLimits): void;
}