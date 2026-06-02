import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JSInteropGetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropGetIteratorNode.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropGetIteratorNodeGen$Uncached extends JSInteropGetIteratorNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: JSObject, arg1Value: JavaScriptLanguage, arg2Value: boolean): Object;
}