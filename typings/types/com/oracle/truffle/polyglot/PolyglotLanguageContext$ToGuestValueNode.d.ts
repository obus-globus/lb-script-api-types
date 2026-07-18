import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotLanguageContext$ToGuestValueNode extends Node {
    constructor()
    execute(node: Node, context: PolyglotLanguageContext, receiver: Object): Object;
}