import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { AccountService$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/AccountService$Companion.d.ts'
export class AccountService extends Enum<AccountService> implements Tagged {
    static CRACKED: AccountService;
    static Companion: AccountService$Companion;
    static MICROSOFT: AccountService;
    static SESSION: AccountService;
    static THEALTENING: AccountService;
    static getEntries(): AccountService[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AccountService;
    static values(): AccountService[];
    private constructor(tag: string, canJoinOnline: boolean)
    readonly canJoinOnline: boolean;
    readonly tag: string;
    name(): "MICROSOFT" | "SESSION" | "THEALTENING" | "CRACKED";
}