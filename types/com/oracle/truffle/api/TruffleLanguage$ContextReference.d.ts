import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguage$ContextReference<C extends Object | number | string | boolean> extends Object {
    static create(paramlanguageClass: Class<Object>): TruffleLanguage$ContextReference<Object>;
    constructor()
    get(node: Node): C;
}