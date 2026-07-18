import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TextEncoderBuiltins$UTF8EncodeIntoNode } from '../../../../../../com/oracle/truffle/js/builtins/web/TextEncoderBuiltins$UTF8EncodeIntoNode.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TextEncoderBuiltinsFactory$UTF8EncodeIntoNodeGen extends TextEncoderBuiltins$UTF8EncodeIntoNode {
    static create(): TextEncoderBuiltins$UTF8EncodeIntoNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getTypedArrayByteLengthNode_field1_: Object;
    // private getTypedArrayByteLengthNode_field2_: Node;
    // private interopBuffer_asByteBufferInterop_: InteropLibrary;
    // private interopBuffer_bufferInterop_: InteropLibrary;
    // private state_0_: number;
    execute(string: TruffleString, destination: JSTypedArrayObject): number;
    execute(arg0Value: TruffleString, arg1Value: JSTypedArrayObject, arg2Value: number, arg3Value: number): number;
    // private executeAndSpecialize(arg0Value: TruffleString, arg1Value: JSTypedArrayObject, arg2Value: number, arg3Value: number): number;
}