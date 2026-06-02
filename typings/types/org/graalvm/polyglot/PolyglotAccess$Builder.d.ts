import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { PolyglotAccess } from '../../../org/graalvm/polyglot/PolyglotAccess.d.ts'
export class PolyglotAccess$Builder extends Object {
    constructor(null_: PolyglotAccess$Builder)
    // private bindingsAccess: string[];
    // private evalAccess: EconomicMap<string, string[]>;
    allowBindingsAccess(language: string): PolyglotAccess$Builder;
    allowEval(from: string, to: string): PolyglotAccess$Builder;
    allowEvalBetween(languages: string[]): PolyglotAccess$Builder;
    build(): PolyglotAccess;
    denyBindingsAccess(language: string): PolyglotAccess$Builder;
    denyEval(from: string, to: string): PolyglotAccess$Builder;
    denyEvalBetween(languages: string[]): PolyglotAccess$Builder;
}