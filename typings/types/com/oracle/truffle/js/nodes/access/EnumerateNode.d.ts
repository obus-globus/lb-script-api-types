import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class EnumerateNode extends JavaScriptNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramvalues: boolean, paramrequireIterable: boolean): EnumerateNode;
    static create(paramcontext: JSContext, paramtarget: JavaScriptNode, paramvalues: boolean): EnumerateNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, values: boolean, requireIterable: boolean, targetNode: JavaScriptNode)
    // private context: JSContext;
    // private requireIterable: boolean;
    // private setEnumerateIteratorNode: PropertySetNode;
    // private targetNode: JavaScriptNode;
    // private values: boolean;
    copyRecursive(): EnumerateNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createValues(): EnumerateNode;
    doEnumerateJSAdapter(iteratedObject: JSObject, enumerateCallbackResultNode: EnumerateNode): JSObject;
    doEnumerateNullOrUndefined(iteratedObject: Object): JSObject;
    doEnumerateObject(iteratedObject: JSObject): JSObject;
    doEnumerateTruffleObject(iteratedObject: Object, node: Node, interop: InteropLibrary, keysInterop: InteropLibrary, notIterable: InlinedBranchProfile, switchEncoding: TruffleString$SwitchEncodingNode): JSObject;
    doNonObject(iteratedObject: Object, toObjectNode: JSToObjectNode, enumerateNode: EnumerateNode): JSObject;
    // private enumerateString(string: TruffleString): JSObject;
    execute(frame: VirtualFrame): JSObject;
    execute(iteratedObject: Object): JSObject;
    // private newEmptyIterator(): JSObject;
    // private newEnumerateIterator(iterator: Object): JSObject;
    // private newForInIterator(obj: JSObject): JSObject;
}