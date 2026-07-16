import type { Semver$SemverType } from '../../../com/vdurmont/semver4j/Semver$SemverType.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Tokenizer$TokenType extends Enum<Tokenizer$TokenType> {
    static AND: Tokenizer$TokenType;
    static CARET: Tokenizer$TokenType;
    static CLOSING: Tokenizer$TokenType;
    static EQ: Tokenizer$TokenType;
    static GT: Tokenizer$TokenType;
    static GTE: Tokenizer$TokenType;
    static HYPHEN: Tokenizer$TokenType;
    static LT: Tokenizer$TokenType;
    static LTE: Tokenizer$TokenType;
    static OPENING: Tokenizer$TokenType;
    static OR: Tokenizer$TokenType;
    static TILDE: Tokenizer$TokenType;
    static VERSION: Tokenizer$TokenType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Tokenizer$TokenType;
    static values(): Tokenizer$TokenType[];
    private constructor(arg2: string, arg3: boolean, ...arg4: Semver$SemverType[])
    character: string;
    // private supportedTypes: Semver$SemverType[];
    readonly unary: boolean;
    isUnary(): boolean;
    supports(arg0: Semver$SemverType): boolean;
    name(): "TILDE" | "CARET" | "EQ" | "LT" | "LTE" | "GT" | "GTE" | "HYPHEN" | "OR" | "AND" | "OPENING" | "CLOSING" | "VERSION";
}