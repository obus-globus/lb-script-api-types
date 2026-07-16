import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GetNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetNumberOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetNumberOptionNodeGen extends GetNumberOptionNode {
    static create(paramcontext: JSContext, paramproperty: TruffleString): GetNumberOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, property: TruffleString)
    executeInt(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: number): number;
}