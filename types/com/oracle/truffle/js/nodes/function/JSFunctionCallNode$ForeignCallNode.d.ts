import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ValueProfile } from '../../../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { ExportArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportArgumentsNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionCallNode$ForeignCallNode extends JSFunctionCallNode$AbstractCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(expectedArgumentCount: number)
    // private exportArgumentsNode: ExportArgumentsNode;
    // private functionClassProfile: ValueProfile;
    // private typeConvertNode: ImportValueNode;
    accept(function_: Object): boolean;
    convertForeignReturn(returnValue: Object): Object;
    exportArguments(arguments: Object[]): Object[];
    exportArguments(arguments: Object[], skip: number): Object[];
    getForeignFunction(arguments: Object[]): Object;
}