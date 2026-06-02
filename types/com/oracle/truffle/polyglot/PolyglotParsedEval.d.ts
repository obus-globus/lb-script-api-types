import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotParsedEval extends Object implements TruffleObject {
    constructor(languageContext: PolyglotLanguageContext, source: Source, target: CallTarget)
    // private languageContext: PolyglotLanguageContext;
    // private source: Source;
    // private target: CallTarget;
}