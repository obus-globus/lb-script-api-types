import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { PolyglotAccess$Builder } from '../../../org/graalvm/polyglot/PolyglotAccess$Builder.d.ts'
export class PolyglotAccess extends Object {
    static ALL: PolyglotAccess;
    static NONE: PolyglotAccess;
    static newBuilder(): PolyglotAccess$Builder;
    constructor(allAccess: boolean, access: EconomicMap<string, string[]>, bindingsAccess: string[])
    // private allAccess: boolean;
    // private bindingsAccess: string[];
    // private evalAccess: EconomicMap<string, string[]>;
    getBindingsAccess(): string[];
    getEvalAccess(): JavaMap<string, string[]>;
    getEvalAccess(language: string): string[];
    validate(availableLanguages: string[]): string;
}