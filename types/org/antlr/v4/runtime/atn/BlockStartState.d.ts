import type { BlockEndState } from '../../../../../org/antlr/v4/runtime/atn/BlockEndState.d.ts'
import type { DecisionState } from '../../../../../org/antlr/v4/runtime/atn/DecisionState.d.ts'
export abstract class BlockStartState extends DecisionState {
    static BASIC: number;
    static BLOCK_END: number;
    static BLOCK_START: number;
    static INITIAL_NUM_TRANSITIONS: number;
    static INVALID_STATE_NUMBER: number;
    static INVALID_TYPE: number;
    static LOOP_END: number;
    static PLUS_BLOCK_START: number;
    static PLUS_LOOP_BACK: number;
    static RULE_START: number;
    static RULE_STOP: number;
    static STAR_BLOCK_START: number;
    static STAR_LOOP_BACK: number;
    static STAR_LOOP_ENTRY: number;
    static TOKEN_START: number;
    static serializationNames: string[];
    constructor()
    endState: BlockEndState;
}