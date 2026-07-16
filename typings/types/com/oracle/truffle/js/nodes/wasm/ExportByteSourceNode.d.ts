import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ArrayBufferViewGetByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferViewGetByteLengthNode.d.ts'
import type { GetViewByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/GetViewByteLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDataViewObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteSequence } from '../../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export abstract class ExportByteSourceNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramnonByteSourceMessage: string, paramemptyByteSourceMessage: string): ExportByteSourceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, nonByteSourceMessage: string, emptyByteSourceMessage: string)
    // private context: JSContext;
    // private emptyByteSourceMessage: string;
    // private interop: InteropLibrary;
    // private nonByteSourceMessage: string;
    execute(byteSource: Object): ByteSequence;
    exportBuffer(arrayBuffer: JSArrayBufferObject, errorBranch: InlinedBranchProfile): ByteSequence;
    // private exportBuffer(arrayBuffer: JSArrayBufferObject, offset: number, length: number, errorBranch: InlinedBranchProfile): ByteSequence;
    exportDataView(dataView: JSDataViewObject, getByteLengthNode: GetViewByteLengthNode, errorBranch: InlinedBranchProfile): ByteSequence;
    exportOther(other: Object): ByteSequence;
    exportTypedArray(typedArray: JSTypedArrayObject, getByteLengthNode: ArrayBufferViewGetByteLengthNode, errorBranch: InlinedBranchProfile): ByteSequence;
}