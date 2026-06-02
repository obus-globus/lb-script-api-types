import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ObjectLiteralNode$ComputedObjectLiteralDataMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ComputedObjectLiteralDataMemberNode.d.ts'
import type { ObjectLiteralNodeFactory$ComputedObjectLiteralDataMemberNodeGen$NoFieldNoFunctionDef0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNodeFactory$ComputedObjectLiteralDataMemberNodeGen$NoFieldNoFunctionDef0Data.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNodeFactory$ComputedObjectLiteralDataMemberNodeGen extends ObjectLiteralNode$ComputedObjectLiteralDataMemberNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: (Object | null)[]): (Object | null)[];
    static create(paramkey: JavaScriptNode, paramisStatic: boolean, paramattributes: number, paramvalueNode: JavaScriptNode, paramisField: boolean, paramisAnonymousFunctionDefinition: boolean): ObjectLiteralNode$ComputedObjectLiteralDataMemberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(key: JavaScriptNode, isStatic: boolean, attributes: number, valueNode: JavaScriptNode, isField: boolean, isAnonymousFunctionDefinition: boolean)
    // private noFieldNoFunctionDef0_cache: ObjectLiteralNodeFactory$ComputedObjectLiteralDataMemberNodeGen$NoFieldNoFunctionDef0Data;
    // private state_0_: number;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: JSObject, arg1Value: JSObject, arg2Value: JSRealm): void;
    executeVoid(frameValue: VirtualFrame, arg0Value: JSObject, arg1Value: JSObject, arg2Value: JSRealm): void;
    // private noFieldNoFunctionDef1Boundary(state_0: number, frameValue: MaterializedFrame, arg0Value: JSObject, arg1Value: JSObject, arg2Value: JSRealm): void;
}