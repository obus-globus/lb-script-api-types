import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DataViewPrototypeBuiltins$DataViewGetNode$GetBufferElementNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(node: Node, buffer: JSArrayBufferObject, bufferIndex: number, littleEndian: boolean, factory: TypedArrayFactory): Object;
    execute(node: Node, buffer: JSArrayBufferObject, bufferIndex: number, littleEndian: boolean, factory: TypedArrayFactory, byteBuffer: ByteBuffer): Object;
}