import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AccountManagerLoginResultEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AccountManagerLoginResultEvent.d.ts'
import type { AlteningAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/AlteningAccount.d.ts'
import type { MicrosoftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MicrosoftAccount.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount.d.ts'
import type { SessionBundle } from '../../../../../net/ccbluex/liquidbounce/features/account/SessionBundle.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class AccountManager extends Config implements EventListener {
    static INSTANCE: AccountManager;
    readonly accounts: MinecraftAccount[];
    // private activeDeviceCodeUrl: string | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private initialSession: SessionBundle;
    // private loggingIn: AtomicBoolean;
    // private microsoftLoginInProgress: AtomicBoolean;
    readonly running: boolean;
    children(): EventListener[];
    favoriteAccount(id: number): void;
    generateAlteningAccount(apiToken: string): Result<AlteningAccount>;
    // private handleNewMicrosoftAccount(account: MicrosoftAccount): void;
    // private invalidateRealms(): void;
    loginAccount(id: number): void;
    loginCrackedAccount(username: string, online: boolean): void;
    loginDirectAccount(account: MinecraftAccount): AccountManagerLoginResultEvent;
    loginSessionAccount(token: string): void;
    newAlteningAccount(accountToken: string): Result<void>;
    /**
     * Cannot join premium servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:113}
     */
    newCrackedAccount(username: string, online: boolean): void;
    /**
     * Does not support accounts with two-factor authentication enabled. Runs asynchronously; the result is
     * surfaced via {@link AccountManagerAdditionResultEvent}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L259 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:259}
     */
    newMicrosoftAccountViaCredentials(email: string, password: string): void;
    /**
     * Blocks only until the verification URL is known and hands it to {@link url}; the account itself is created
     * once the user signs in elsewhere, surfaced via {@link AccountManagerAdditionResultEvent}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L178 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:178}
     */
    newMicrosoftAccountViaDeviceCode(url: (param0: string) => void): void;
    /**
     * Runs asynchronously; the result is surfaced via {@link AccountManagerAdditionResultEvent}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L213 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:213}
     */
    newMicrosoftAccountViaWebView(): void;
    newSessionAccount(token: string): void;
    orderAccounts(order: number[]): void;
    parent(): EventListener | null;
    removeAccount(id: number): MinecraftAccount;
    restoreInitial(): void;
    swapAccounts(index1: number, index2: number): void;
    unfavoriteAccount(id: number): void;
    unregister(): void;
}