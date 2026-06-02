import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$GetCodeRangeImpreciseNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeImpreciseNode.d.ts'
import type { TruffleString$GetInternalByteArrayNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$GetInternalByteArrayNode.d.ts'
import type { TruffleString$ReadByteNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadByteNode.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ArrayBufferViewGetByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferViewGetByteLengthNode.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
export abstract class TextEncoderBuiltins$UTF8EncodeIntoNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getCodeRangeImpreciseNode: TruffleString$GetCodeRangeImpreciseNode;
    // private getInternalByteArrayNode: TruffleString$GetInternalByteArrayNode;
    // private readByteNode: TruffleString$ReadByteNode;
    // private switchEncodingNode: TruffleString$SwitchEncodingNode;
    doDirectBuffer(string: TruffleString, destination: JSTypedArrayObject, destOffset: number, maxLength: number, getTypedArrayByteLengthNode: ArrayBufferViewGetByteLengthNode): number;
    doHeapBuffer(string: TruffleString, destination: JSTypedArrayObject, destOffset: number, maxLength: number, getTypedArrayByteLengthNode: ArrayBufferViewGetByteLengthNode): number;
    doInteropBuffer(string: TruffleString, destination: JSTypedArrayObject, destOffset: number, maxLength: number, getTypedArrayByteLengthNode: ArrayBufferViewGetByteLengthNode, asByteBufferInterop: InteropLibrary, bufferInterop: InteropLibrary): number;
    encodeInto(string: TruffleString, destination: JSTypedArrayObject, viewOffset: number, maxLength: number, rawBuffer: ByteBuffer, getTypedArrayByteLengthNode: ArrayBufferViewGetByteLengthNode, interop: InteropLibrary): number;
    execute(string: TruffleString, destination: JSTypedArrayObject): number;
    execute(string: TruffleString, destination: JSTypedArrayObject, destOffset: number, maxLength: number): number;
}