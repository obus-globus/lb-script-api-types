import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export interface PolyglotImpl$VMObject extends Object{
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    getEngine(): PolyglotEngineImpl;
    getImpl(): PolyglotImpl;
}