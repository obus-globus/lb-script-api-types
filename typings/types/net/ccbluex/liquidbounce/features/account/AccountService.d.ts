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
    private constructor(tag: string, canJoinOnline: boolean, serialName: string)
    readonly canJoinOnline: boolean;
    /**
     * The simple class name the {@link MinecraftAccount} subclass used to have, kept so that configs written
     * by older versions keep loading.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountService.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountService.kt:31}
     */
    readonly serialName: string;
    readonly tag: string;
    name(): "MICROSOFT" | "SESSION" | "THEALTENING" | "CRACKED";
}