import type { Object } from '../../../java/lang/Object.d.ts'
export class Token extends Object {
    static AND_EQ: number;
    static ARROW: number;
    static CCOMMENT: number;
    static CHARACTER: number;
    static CPPCOMMENT: number;
    static DEC: number;
    static DIV_EQ: number;
    static ELLIPSIS: number;
    static EOF: number;
    static EQ: number;
    static GE: number;
    static HASH: number;
    static HEADER: number;
    static IDENTIFIER: number;
    static INC: number;
    static INVALID: number;
    static LAND: number;
    static LAND_EQ: number;
    static LE: number;
    static LITERAL: number;
    static LOR: number;
    static LOR_EQ: number;
    static LSH: number;
    static LSH_EQ: number;
    static MOD_EQ: number;
    static MULT_EQ: number;
    static M_ARG: number;
    static M_PASTE: number;
    static M_STRING: number;
    static NE: number;
    static NL: number;
    static NUMBER: number;
    static OR_EQ: number;
    static PASTE: number;
    static PLUS_EQ: number;
    static P_LINE: number;
    static RANGE: number;
    static RSH: number;
    static RSH_EQ: number;
    static SQSTRING: number;
    static STRING: number;
    static SUB_EQ: number;
    static WHITESPACE: number;
    static XOR_EQ: number;
    static getTokenName(paramarg0: number): string;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: Object)
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: Object)
    readonly column: number;
    readonly line: number;
    readonly text: string;
    readonly type: number;
    readonly value: Object;
    getColumn(): number;
    getLine(): number;
    getText(): string;
    getType(): number;
    getValue(): Object;
    setLocation(arg0: number, arg1: number): void;
    toString(): string;
}