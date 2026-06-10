import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AccountService$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/AccountService$Companion.d.ts'
export class AccountService extends Enum<AccountService> implements Tagged {
    static CRACKED: AccountService;
    static Companion: Tagged$Companion;
    static Companion: AccountService$Companion;
    static MICROSOFT: AccountService;
    static SESSION: AccountService;
    static THEALTENING: AccountService;
    static getEntries(): AccountService[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AccountService;
    static values(): (Object | null)[];
    private constructor(tag: string, canJoinOnline: boolean)
    readonly canJoinOnline: boolean;
    readonly tag: string;
    name(): "MICROSOFT" | "SESSION" | "THEALTENING" | "CRACKED";
}