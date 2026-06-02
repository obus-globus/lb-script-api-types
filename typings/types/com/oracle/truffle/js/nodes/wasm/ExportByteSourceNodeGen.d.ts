import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetViewByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/GetViewByteLengthNode.d.ts'
import type { ExportByteSourceNode } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ExportByteSourceNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteSequence } from '../../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class ExportByteSourceNodeGen extends ExportByteSourceNode {
    static create(paramcontext: JSContext, paramnonByteSourceMessage: string, paramemptyByteSourceMessage: string): ExportByteSourceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, nonByteSourceMessage: string, emptyByteSourceMessage: string)
    // private exportDataView_getByteLengthNode_: GetViewByteLengthNode;
    // private exportTypedArray_getByteLengthNode__field1_: Object;
    // private exportTypedArray_getByteLengthNode__field2_: Node;
    // private state_0_: number;
    execute(arg0Value: Object): ByteSequence;
    // private executeAndSpecialize(arg0Value: Object): ByteSequence;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}