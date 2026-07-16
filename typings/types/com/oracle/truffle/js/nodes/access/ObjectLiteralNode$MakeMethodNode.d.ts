import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { FunctionNameHolder } from '../../../../../../com/oracle/truffle/js/nodes/function/FunctionNameHolder.d.ts'
import type { FunctionNameHolder$Delegate } from '../../../../../../com/oracle/truffle/js/nodes/function/FunctionNameHolder$Delegate.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNode$MakeMethodNode extends JavaScriptNode implements FunctionNameHolder$Delegate {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, paramfunctionNode: JavaScriptNode): JavaScriptNode;
    static createWithKey(paramcontext: JSContext, paramfunctionNode: JavaScriptNode, paramkey: HiddenKey): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, functionNode: JavaScriptNode)
    private constructor(context: JSContext, functionNode: JavaScriptNode, key: HiddenKey)
    // private functionNode: JavaScriptNode;
    // private makeMethodNode: PropertySetNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeWithObject(frame: VirtualFrame, obj: JSObject, realm: JSRealm): Object;
    getFunctionName(): TruffleString;
    getFunctionNameHolder(): FunctionNameHolder;
    isAnonymous(): boolean;
    setFunctionName(name: TruffleString): void;
}