import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CookieHeaderNames$SameSite extends Enum<CookieHeaderNames$SameSite> {
    static Lax: CookieHeaderNames$SameSite;
    static None: CookieHeaderNames$SameSite;
    static Strict: CookieHeaderNames$SameSite;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CookieHeaderNames$SameSite;
    static values(): CookieHeaderNames$SameSite[];
    private constructor()
    name(): "Lax" | "Strict" | "None";
}