import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSHasPropertyNodeGen$ArrayLongCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNodeGen$ArrayLongCachedData.d.ts'
import type { JSHasPropertyNodeGen$ArrayStringCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNodeGen$ArrayStringCachedData.d.ts'
import type { JSHasPropertyNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNodeGen$ForeignObject0Data.d.ts'
import type { JSHasPropertyNodeGen$ForeignObject1Data } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNodeGen$ForeignObject1Data.d.ts'
import type { JSHasPropertyNodeGen$ObjectStringCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNodeGen$ObjectStringCachedData.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSHasPropertyNodeGen extends JSHasPropertyNode {
    static create(): JSHasPropertyNode;
    static create(paramhasOwnProperty: boolean): JSHasPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(hasOwnProperty: boolean)
    // private arrayLongCached_cache: JSHasPropertyNodeGen$ArrayLongCachedData;
    // private arrayStringCached_cache: JSHasPropertyNodeGen$ArrayStringCachedData;
    // private equalNode: TruffleString$EqualNode;
    // private foreignObject0_cache: JSHasPropertyNodeGen$ForeignObject0Data;
    // private foreignObject1_cache: JSHasPropertyNodeGen$ForeignObject1Data;
    // private objectObject_toPropertyKeyNode_: JSToPropertyKeyNode;
    // private objectStringCached_cache: JSHasPropertyNodeGen$ObjectStringCachedData;
    // private state_0_: number;
    // private typedArray_typedArrayLengthNode__field1_: Node;
    // private checkForPolymorphicSpecialize(oldState_0: number): void;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): boolean;
    executeBoolean(arg0Value: Object, arg1Value: Object): boolean;
    executeBoolean(arg0Value: Object, arg1Value: number): boolean;
    // private foreignObject1Boundary(state_0: number, s9_: JSHasPropertyNodeGen$ForeignObject1Data, arg0Value: Object, arg1Value: Object): boolean;
    // private foreignObject1Boundary0(state_0: number, s9_: JSHasPropertyNodeGen$ForeignObject1Data, arg0Value: Object, arg1Value: number): boolean;
}