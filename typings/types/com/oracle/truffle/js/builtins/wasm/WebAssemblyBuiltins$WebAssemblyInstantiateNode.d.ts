import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { WebAssemblyBuiltins$PromisifiedBuiltinNode } from '../../../../../../com/oracle/truffle/js/builtins/wasm/WebAssemblyBuiltins$PromisifiedBuiltinNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { ExportByteSourceNode } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ExportByteSourceNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSWebAssemblyInstanceObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyInstanceObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WebAssemblyBuiltins$WebAssemblyInstantiateNode extends WebAssemblyBuiltins$PromisifiedBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static instantiateModule(paramcontext: JSContext, paramrealm: JSRealm, paramwasmModule: Object, paramimportObject: Object, paraminstantiateModuleLib: InteropLibrary): JSWebAssemblyInstanceObject;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private errorBranch: BranchProfile;
    // private exportByteSourceNode: ExportByteSourceNode;
    // private instantiateModuleLib: InteropLibrary;
    // private isObjectNode: IsObjectNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    instantiate(byteSourceOrModule: Object, importObject: Object): Object;
    process(argument: Object): Object;
}