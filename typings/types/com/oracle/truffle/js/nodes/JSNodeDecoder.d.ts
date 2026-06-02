import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { NodeDecoder$DecoderState } from '../../../../../com/oracle/truffle/js/codec/NodeDecoder$DecoderState.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSNodeDecoder extends Object {
    static BREAK_TARGET_LABEL: number;
    static BREAK_TARGET_SWITCH: number;
    static CONTEXT_ARG: number;
    static CONTINUE_TARGET_LOOP: number;
    static CONTINUE_TARGET_UNLABELED_LOOP: number;
    static SOURCE_ARG: number;
    static getChecksum(): number;
    static getSingletonIndex(paramsingleton: Object): number;
    constructor()
    decodeNode(state: NodeDecoder$DecoderState, nodeFactory: NodeFactory, context: JSContext, source: Source): Object;
}