import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { AlteningAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/AlteningAccount.d.ts'
import type { MicrosoftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AccountManagerLoginResultEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AccountManagerLoginResultEvent.d.ts'
import type { SessionBundle } from '../../../../../net/ccbluex/liquidbounce/features/account/SessionBundle.d.ts'
export class AccountManager extends Config implements EventListener {
    static INSTANCE: AccountManager;
    readonly accounts: MinecraftAccount[];
    // private activeUrl: string | null;
    // private initialSession: SessionBundle;
    // private loggingIn: AtomicBoolean;
    children(): EventListener[];
    favoriteAccount(id: number): void;
    generateAlteningAccount(apiToken: string): Result<AlteningAccount>;
    loginAccount(id: number): void;
    loginCrackedAccount(username: string, online: boolean): void;
    loginDirectAccount(account: MinecraftAccount): AccountManagerLoginResultEvent;
    loginSessionAccount(token: string): void;
    newAlteningAccount(accountToken: string): Result<void>;
    /**
     * Cracked account. This can only be used to join cracked servers and not premium servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:116}
     */
    newCrackedAccount(username: string, online: boolean): void;
    /**
     * Create a new Microsoft Account using the OAuth2 flow which opens a browser window to authenticate the user
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L214 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:214}
     */
    newMicrosoftAccount(url: Function1<string, void>): void;
    // private newMicrosoftAccount(url: Function1<string, void>, success: Function1<MicrosoftAccount, void>, error: Function1<string, void>): void;
    newSessionAccount(token: string): void;
    orderAccounts(order: number[]): void;
    parent(): EventListener | null;
    removeAccount(id: number): MinecraftAccount;
    restoreInitial(): void;
    swapAccounts(index1: number, index2: number): void;
    unfavoriteAccount(id: number): void;
    unregister(): void;
}