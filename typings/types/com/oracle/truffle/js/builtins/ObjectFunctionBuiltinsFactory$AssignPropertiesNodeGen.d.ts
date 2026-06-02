import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ObjectFunctionBuiltins$AssignPropertiesNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltins$AssignPropertiesNode.d.ts'
import type { ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object0Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object0Data.d.ts'
import type { ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object1Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object1Data.d.ts'
import type { ListGetNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClassProfile } from '../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen extends ObjectFunctionBuiltins$AssignPropertiesNode {
    static create(paramcontext: JSContext): ObjectFunctionBuiltins$AssignPropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private copyPropertiesFromJSObject_classProfile_: JSClassProfile;
    // private copyPropertiesFromJSObject_getOwnProperty_: JSGetOwnPropertyNode;
    // private copyPropertiesFromJSObject_listGet_: ListGetNode;
    // private copyPropertiesFromJSObject_listSize_: ListSizeNode;
    // private copyPropertiesFromJSObject_read_: ReadElementNode;
    // private object0_cache: ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object0Data;
    // private object1_cache: ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object1Data;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: WriteElementNode): void;
    executeVoid(arg0Value: Object, arg1Value: Object, arg2Value: WriteElementNode): void;
    // private object1Boundary(state_0: number, s2_: ObjectFunctionBuiltinsFactory$AssignPropertiesNodeGen$Object1Data, arg0Value: Object, arg1Value: Object, arg2Value: WriteElementNode): void;
}