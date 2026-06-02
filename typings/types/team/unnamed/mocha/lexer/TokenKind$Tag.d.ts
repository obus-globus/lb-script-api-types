import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TokenKind$Tag extends Enum<TokenKind$Tag> {
    static HAS_VALUE: TokenKind$Tag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TokenKind$Tag;
    static values(): (Object | null)[];
    private constructor()
    name(): "HAS_VALUE";
}