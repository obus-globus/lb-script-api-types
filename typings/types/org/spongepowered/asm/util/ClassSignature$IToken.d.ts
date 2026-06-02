import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassSignature$Token } from '../../../../org/spongepowered/asm/util/ClassSignature$Token.d.ts'
export interface ClassSignature$IToken extends Object{
    asToken(): ClassSignature$Token;
    asType(): string;
    setArray(arg0: boolean): ClassSignature$IToken;
    setWildcard(arg0: string): ClassSignature$IToken;
}