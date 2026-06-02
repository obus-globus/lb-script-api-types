import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotLanguageContext$ToHostValueNode extends Node {
    constructor()
    doCached(languageContext: PolyglotLanguageContext, value: Object, cachedClass: Class<Object>, cachedValue: PolyglotValueDispatch): Object;
    doGeneric(languageContext: PolyglotLanguageContext, value: Object): Object;
    execute(node: Node, languageContext: PolyglotLanguageContext, value: Object): Object;
}