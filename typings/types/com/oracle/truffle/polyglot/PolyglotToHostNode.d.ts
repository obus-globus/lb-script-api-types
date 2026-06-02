import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotToHostNode extends Node {
    constructor()
    execute(node: Node, languageContext: PolyglotLanguageContext, value: Object, targetType: Class<Object>, genericType: Type): Object;
}