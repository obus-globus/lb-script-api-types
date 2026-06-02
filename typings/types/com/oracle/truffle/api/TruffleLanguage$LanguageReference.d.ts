import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguage$LanguageReference<L extends TruffleLanguage<Object>> extends Object {
    static create(paramlanguageClass: Class<Object>): TruffleLanguage$LanguageReference<Object>;
    constructor()
    get(node: Node): L;
}