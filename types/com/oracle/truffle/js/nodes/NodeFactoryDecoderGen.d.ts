import type { NodeDecoder } from '../../../../../com/oracle/truffle/js/codec/NodeDecoder.d.ts'
import type { NodeDecoder$DecoderState } from '../../../../../com/oracle/truffle/js/codec/NodeDecoder$DecoderState.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeFactoryDecoderGen extends Object implements NodeDecoder<NodeFactory> {
    static create(): NodeFactoryDecoderGen;
    private constructor()
    decodeNode(decoder: NodeDecoder$DecoderState, nodeFactory: NodeFactory): Object;
    getChecksum(): number;
    getClasses(): Class<Object>[];
    getClasses(): Class<Object>[];
    getMethodIdFromSignature(signature: string): number;
}