import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguage$LanguageReference<L extends TruffleLanguage<Object>> extends Object {
    static create<T extends TruffleLanguage<Object>>(paramlanguageClass: Class<T>): TruffleLanguage$LanguageReference<T>;
    constructor()
    get(node: Node): L;
}