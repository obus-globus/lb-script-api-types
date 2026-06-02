import type { InteropException } from '../../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ValueProfile } from '../../../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionCallNode$ForeignExecuteNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$ForeignExecuteNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$ForeignInvokeNode extends JSFunctionCallNode$ForeignExecuteNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionName: TruffleString, expectedArgumentCount: number)
    // private callJSFunctionNode: JSFunctionCallNode;
    // private errorBranch: BranchProfile;
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private functionName: TruffleString;
    // private functionNameJavaString: string;
    // private getFunctionNode: PropertyGetNode;
    // private optimistic: boolean;
    // private thisClassProfile: ValueProfile;
    // private callJSFunction(receiver: Object, function_: Object, arguments: Object[]): Object;
    executeCall(arguments: Object[]): Object;
    // private fallback(receiver: Object, arguments: Object[], callArguments: Object[], caughtException: InteropException): Object;
    // private getContext(): JSContext;
    // private getFunction(object: Object, receiver: Object): Object;
    // private maybeGetFromPrototype(receiver: Object): Object;
}