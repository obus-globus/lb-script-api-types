import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptLanguage } from '../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSLanguageOptions } from '../../../../../com/oracle/truffle/js/runtime/JSLanguageOptions.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class JavaScriptBaseNode extends Node {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    copy(): JavaScriptBaseNode;
    getJSContext(): JSContext;
    getLanguage(): JavaScriptLanguage;
    getLanguageOptions(): JSLanguageOptions;
    getRealm(): JSRealm;
    hasOverloadedOperators(obj: Object): boolean;
    onReplace(newNode: Node, reason: CharSequence): void;
}