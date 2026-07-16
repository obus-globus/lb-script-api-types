import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguage$ContextReference<C extends unknown> extends Object {
    static create<T extends TruffleLanguage<C>, C extends unknown>(paramlanguageClass: Class<T>): TruffleLanguage$ContextReference<C>;
    constructor()
    get(node: Node): C;
}