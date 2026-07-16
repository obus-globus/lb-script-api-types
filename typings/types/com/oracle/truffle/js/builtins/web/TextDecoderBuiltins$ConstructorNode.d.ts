import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JSTextDecoderObject } from '../../../../../../com/oracle/truffle/js/builtins/web/JSTextDecoderObject.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSTrimWhitespaceNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSTrimWhitespaceNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { GetBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { JSIsNullOrUndefinedNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsNullOrUndefinedNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TextDecoderBuiltins$ConstructorNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, isNewTargetCase: boolean)
    // private getFatalOption: GetBooleanOptionNode;
    // private getIgnoreBOMOption: GetBooleanOptionNode;
    // private construct(newTarget: JSDynamicObject, encodingName: TruffleString, truffleStringEncoding: TruffleString$Encoding, fatal: boolean, ignoreBOM: boolean): JSTextDecoderObject;
    construct(newTarget: JSDynamicObject, label: Object, options: Object, toStringNode: JSToStringNode, equalNode: TruffleString$EqualNode, trimWhitespaceNode: JSTrimWhitespaceNode, toJavaStringNode: TruffleString$ToJavaStringNode, isNullOrUndefinedNode: JSIsNullOrUndefinedNode, isObjectNode: IsObjectNode): JSObject;
    constructNoArgs(newTarget: JSDynamicObject, label: Object, options: Object): JSObject;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
}