import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { WebAssemblyType } from '../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WebAssemblyType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToWebAssemblyValueNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    anyfunc(value: Object, type: WebAssemblyType, errorBranch: InlinedBranchProfile): Object;
    anyref(value: Object, type: WebAssemblyType): Object;
    execute(value: Object, type: WebAssemblyType): Object;
    fallback(value: Object, type: WebAssemblyType): Object;
}