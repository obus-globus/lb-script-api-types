import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { PolyglotBuiltins$PolyglotImportNode } from '../../../../../com/oracle/truffle/js/builtins/PolyglotBuiltins$PolyglotImportNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PolyglotBuiltinsFactory$PolyglotImportNodeGen extends PolyglotBuiltins$PolyglotImportNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): PolyglotBuiltins$PolyglotImportNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private importValueNode: ImportValueNode;
    // private interop: InteropLibrary;
    // private maybeUnbox_switchEncoding_: TruffleString$SwitchEncodingNode;
    // private state_0_: number;
    // private toJavaStringNode: TruffleString$ToJavaStringNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    getArguments(): JavaScriptNode[];
}