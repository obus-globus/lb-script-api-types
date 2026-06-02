import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSTextEncoderObject } from '../../../../../../com/oracle/truffle/js/builtins/web/JSTextEncoderObject.d.ts'
import type { TextEncoderBuiltins$UTF8EncodeIntoNode } from '../../../../../../com/oracle/truffle/js/builtins/web/TextEncoderBuiltins$UTF8EncodeIntoNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TextEncoderBuiltins$EncodeIntoNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private createReadDataPropertyNode: CreateDataPropertyNode;
    // private createWrittenDataPropertyNode: CreateDataPropertyNode;
    // private createEncodeIntoResult(readLength: number, writtenLength: number): JSObject;
    doValidate(thisObj: JSTextEncoderObject, source: Object, destination: Object, toStringNode: JSToStringNode, utf8EncodeInto: TextEncoderBuiltins$UTF8EncodeIntoNode): JSObject;
    encodeInto(thisObj: JSTextEncoderObject, string: TruffleString, destination: JSTypedArrayObject, utf8EncodeInto: TextEncoderBuiltins$UTF8EncodeIntoNode): JSObject;
    incompatibleReceiver(thisObj: Object, string: Object, destination: Object): Object;
}