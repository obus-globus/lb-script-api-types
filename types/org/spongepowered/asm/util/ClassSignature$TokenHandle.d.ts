import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassSignature$IToken } from '../../../../org/spongepowered/asm/util/ClassSignature$IToken.d.ts'
import type { ClassSignature$Token } from '../../../../org/spongepowered/asm/util/ClassSignature$Token.d.ts'
export class ClassSignature$TokenHandle extends Object implements ClassSignature$IToken {
    constructor(null_: ClassSignature$TokenHandle)
    constructor(null_: ClassSignature$TokenHandle, arg1: ClassSignature$Token)
    // private array: boolean;
    // private token: ClassSignature$Token;
    // private wildcard: string;
    asBound(): string;
    asToken(): ClassSignature$Token;
    asType(): string;
    clone(): ClassSignature$TokenHandle;
    setArray(arg0: boolean): ClassSignature$IToken;
    setWildcard(arg0: string): ClassSignature$IToken;
    toString(): string;
}