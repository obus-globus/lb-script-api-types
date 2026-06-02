import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotExecuteNode extends Node {
    constructor()
    execute(languageContext: PolyglotLanguageContext, function_: Object, functionArgsObject: Object): Object;
    execute(languageContext: PolyglotLanguageContext, function_: Object, functionArgsObject: Object, resultClass: Class<Object>, resultType: Type, paramClass: Class<Object>, paramType: Type): Object;
    executeImpl(languageContext: PolyglotLanguageContext, function_: Object, argsArray: Object[], resultClass: Class<Object>, resultType: Type): Object;
}