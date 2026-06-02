import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TokenRole extends Enum<TokenRole> {
    static BREAKABLE_SPACE: TokenRole;
    static COMMON_FORMATTING: TokenRole;
    static DEFAULT: TokenRole;
    static EXACT: TokenRole;
    static EXTENDABLE_SPACE: TokenRole;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TokenRole;
    static values(): (Object | null)[];
    private constructor()
    name(): "EXACT" | "EXTENDABLE_SPACE" | "BREAKABLE_SPACE" | "COMMON_FORMATTING";
}