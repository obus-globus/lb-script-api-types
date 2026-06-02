import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { SnapshotProvider } from '../../../../../com/oracle/truffle/js/parser/SnapshotProvider.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinarySnapshotProvider extends Object implements SnapshotProvider {
    static MAGIC: number;
    constructor(buffer: ByteBuffer)
    // private buffer: ByteBuffer;
    apply(nodeFactory: NodeFactory, context: JSContext, source: Source): Object;
}