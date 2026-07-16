import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TokenSource extends Enum<TokenSource> {
    static CACHE: TokenSource;
    static IDENTITY_PROVIDER: TokenSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TokenSource;
    static values(): TokenSource[];
    private constructor()
    name(): "IDENTITY_PROVIDER" | "CACHE";
}