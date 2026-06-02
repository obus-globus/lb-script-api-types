import type { TruffleLanguage$ContextReference } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextReference.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotFastThreadLocals$ContextReferenceImpl extends TruffleLanguage$ContextReference<Object> {
    static create(paramlanguageClass: Class<Object>): TruffleLanguage$ContextReference<Object>;
    constructor(languageClass: Class<Object>)
    // private index: number;
    // private languageClass: Class<Object>;
    get(node: Node): Object;
    toString(): string;
}