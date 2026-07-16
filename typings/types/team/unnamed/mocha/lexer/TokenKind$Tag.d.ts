import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TokenKind$Tag extends Enum<TokenKind$Tag> {
    static HAS_VALUE: TokenKind$Tag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TokenKind$Tag;
    static values(): TokenKind$Tag[];
    private constructor()
    name(): "HAS_VALUE";
}