import type { NodeDecoder$DecoderState } from '../../../../../com/oracle/truffle/js/codec/NodeDecoder$DecoderState.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface NodeDecoder<F extends Object | number | string | boolean> extends Object{
    decodeNode(state: NodeDecoder$DecoderState, factory: F): Object;
    getChecksum(): number;
    getClasses(): Class<Object>[];
    getMethodIdFromSignature(signature: string): number;
}