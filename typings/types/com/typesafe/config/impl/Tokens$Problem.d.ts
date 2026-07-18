import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Tokens$Problem extends Token {
    constructor(arg0: ConfigOrigin, arg1: string, arg2: string, arg3: boolean, arg4: Throwable)
    // private cause: Throwable;
    // private message: string;
    // private suggestQuotes: boolean;
    // private what: string;
    canEqual(arg0: Object): boolean;
    cause(): Throwable;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    message(): string;
    suggestQuotes(): boolean;
    toString(): string;
    what(): string;
}