import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export abstract class TypedArrayPrototypeBuiltins$CopyTypedArrayElementsFromInteropBufferNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(node: Node, sourceBuffer: JSArrayBufferObject, sourceByteIndex: number, targetByteBuffer: ByteBuffer, targetByteIndex: number, byteLength: number): void;
}