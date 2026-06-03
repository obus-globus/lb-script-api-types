import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommonToken } from '../../../../../../org/antlr/v4/runtime/CommonToken.d.ts'
import type { Recognizer } from '../../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
export class TokenTagToken extends CommonToken {
    static DEFAULT_CHANNEL: number;
    static EOF: number;
    static EPSILON: number;
    static HIDDEN_CHANNEL: number;
    static INVALID_TYPE: number;
    static MIN_USER_CHANNEL_VALUE: number;
    static MIN_USER_TOKEN_TYPE: number;
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: string)
    readonly label: string;
    readonly tokenName: string;
    getLabel(): string;
    getText(): string;
    getTokenName(): string;
    toString(): string;
    toString(arg0: Recognizer<Object, Object>): string;
}