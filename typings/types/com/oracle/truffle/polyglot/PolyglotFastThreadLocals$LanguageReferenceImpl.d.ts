import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$LanguageReference } from '../../../../com/oracle/truffle/api/TruffleLanguage$LanguageReference.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotFastThreadLocals$LanguageReferenceImpl extends TruffleLanguage$LanguageReference<TruffleLanguage<Object>> {
    static create<T extends TruffleLanguage<Object>>(paramlanguageClass: Class<T>): TruffleLanguage$LanguageReference<T>;
    constructor(languageClass: Class<Object>)
    // private index: number;
    // private languageClass: Class<TruffleLanguage<Object>>;
    get(node: Node): TruffleLanguage<Object>;
    toString(): string;
}