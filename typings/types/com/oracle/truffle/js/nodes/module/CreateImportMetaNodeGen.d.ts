import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { CreateImportMetaNode } from '../../../../../../com/oracle/truffle/js/nodes/module/CreateImportMetaNode.d.ts'
import type { JSModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
export class CreateImportMetaNodeGen extends CreateImportMetaNode {
    static create(): CreateImportMetaNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fallback_fromJavaString_: TruffleString$FromJavaStringNode;
    // private fallback_setURINode_: CreateDataPropertyNode;
    // private state_0_: number;
    execute(arg0Value: JSModuleRecord): JSObject;
    // private executeAndSpecialize(arg0Value: JSModuleRecord): JSObject;
    // private fallbackGuard_(state_0: number, arg0Value: JSModuleRecord): boolean;
}