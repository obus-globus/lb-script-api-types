import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { CopyDataPropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CopyDataPropertiesNode.d.ts'
import type { CopyDataPropertiesNodeGen$CopyDataPropertiesData } from '../../../../../../com/oracle/truffle/js/nodes/access/CopyDataPropertiesNodeGen$CopyDataPropertiesData.d.ts'
import type { CopyDataPropertiesNodeGen$CopyDataPropertiesForeign0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/CopyDataPropertiesNodeGen$CopyDataPropertiesForeign0Data.d.ts'
import type { CopyDataPropertiesNodeGen$CopyDataPropertiesForeign1Data } from '../../../../../../com/oracle/truffle/js/nodes/access/CopyDataPropertiesNodeGen$CopyDataPropertiesForeign1Data.d.ts'
import type { JSIdenticalNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSIdenticalNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CopyDataPropertiesNodeGen extends CopyDataPropertiesNode {
    static create(paramcontext: JSContext): CopyDataPropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private copyDataPropertiesForeign0_cache: CopyDataPropertiesNodeGen$CopyDataPropertiesForeign0Data;
    // private copyDataPropertiesForeign1_cache: CopyDataPropertiesNodeGen$CopyDataPropertiesForeign1Data;
    // private copyDataProperties_cache: CopyDataPropertiesNodeGen$CopyDataPropertiesData;
    // private equalsNode: TruffleString$EqualNode;
    // private sameValueNode: JSIdenticalNode;
    // private state_0_: number;
    // private copyDataPropertiesForeign1Boundary(state_0: number, s3_: CopyDataPropertiesNodeGen$CopyDataPropertiesForeign1Data, arg0Value_: JSDynamicObject, arg1Value: Object, arg2Value: Object[], arg3Value: boolean, arg4Value: Object[], arg5Value: boolean, equalsNode_1: TruffleString$EqualNode, sameValueNode_1: JSIdenticalNode): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object[], arg3Value: boolean, arg4Value: Object[], arg5Value: boolean): JSDynamicObject;
    executeImpl(arg0Value: Object, arg1Value: Object, arg2Value: Object[], arg3Value: boolean, arg4Value: Object[], arg5Value: boolean): Object;
}