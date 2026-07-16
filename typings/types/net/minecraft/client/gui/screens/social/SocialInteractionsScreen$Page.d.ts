import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SocialInteractionsScreen$Page extends Enum<SocialInteractionsScreen$Page> {
    static ALL: SocialInteractionsScreen$Page;
    static BLOCKED: SocialInteractionsScreen$Page;
    static HIDDEN: SocialInteractionsScreen$Page;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SocialInteractionsScreen$Page;
    static values(): SocialInteractionsScreen$Page[];
    private constructor()
    name(): "ALL" | "HIDDEN" | "BLOCKED";
}