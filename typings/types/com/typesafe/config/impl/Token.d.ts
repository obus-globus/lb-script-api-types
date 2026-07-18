import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { TokenType } from '../../../../com/typesafe/config/impl/TokenType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Token extends Object {
    constructor(arg0: TokenType, arg1: ConfigOrigin)
    constructor(arg0: TokenType, arg1: ConfigOrigin, arg2: string)
    constructor(arg0: TokenType, arg1: ConfigOrigin, arg2: string, arg3: string)
    // private debugString: string;
    // private origin: ConfigOrigin;
    // private tokenText: string;
    // private tokenType: TokenType;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    lineNumber(): number;
    origin(): ConfigOrigin;
    toString(): string;
    tokenText(): string;
    tokenType(): TokenType;
}