import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { JavaScriptLanguage } from '../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { ExportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JavaScriptLanguage$ParsedProgramRoot extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    private constructor(null_: JavaScriptLanguage, language: TruffleLanguage<Object>, context: JSContext, program: ScriptNode)
    // private context: JSContext;
    // private directCallNode: DirectCallNode;
    // private exportValueNode: ExportValueNode;
    // private importValueNode: ImportValueNode;
    // private program: ScriptNode;
    execute(frame: VirtualFrame): Object;
    isInstrumentable(): boolean;
    isInternal(): boolean;
}