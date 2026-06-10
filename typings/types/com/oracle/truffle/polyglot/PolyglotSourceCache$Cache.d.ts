import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotSourceCache$ParseOrigin } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$ParseOrigin.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotSourceCache$Cache extends Object {
    private constructor()
    isEmpty(): boolean;
    listSources(polyglot: PolyglotImpl, source: Object[]): void;
    lookup(origin: PolyglotSourceCache$ParseOrigin, context: PolyglotLanguageContext, source: Source, argumentNames: string[], parse: boolean): CallTarget;
}