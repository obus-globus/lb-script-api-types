import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JSInteropGetIteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropGetIteratorNextNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropGetIteratorNextNodeGen$Uncached extends JSInteropGetIteratorNextNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: IteratorRecord, arg1Value: JavaScriptLanguage, arg2Value: Object): Object;
}