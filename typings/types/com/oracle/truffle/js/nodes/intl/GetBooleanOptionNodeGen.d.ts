import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GetBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetBooleanOptionNodeGen extends GetBooleanOptionNode {
    static create(paramcontext: JSContext, paramproperty: TruffleString, paramfallback: boolean): GetBooleanOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, property: TruffleString, fallback: boolean)
    executeValue(arg0Value: Object): boolean;
}