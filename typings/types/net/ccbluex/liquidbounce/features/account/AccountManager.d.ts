import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { AlteningAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/AlteningAccount.d.ts'
import type { MicrosoftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AccountManagerLoginResultEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AccountManagerLoginResultEvent.d.ts'
import type { SessionBundle } from '../../../../../net/ccbluex/liquidbounce/features/account/SessionBundle.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class AccountManager extends Config implements EventListener {
    static INSTANCE: AccountManager;
    readonly accounts: MinecraftAccount[];
    // private activeUrl: string | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private initialSession: SessionBundle;
    // private loggingIn: AtomicBoolean;
    readonly running: boolean;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:119}
     */
    newCrackedAccount(username: string, online: boolean): void;
    /**
     * Create a new Microsoft Account using the OAuth2 flow which opens a browser window to authenticate the user
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt#L217 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AccountManager.kt:217}
     */
    newMicrosoftAccount(url: (param0: string) => void): void;
    // private newMicrosoftAccount(url: (param0: string) => void, success: (param0: MicrosoftAccount) => void, error: (param0: string) => void): void;
    newSessionAccount(token: string): void;
    orderAccounts(order: number[]): void;
    parent(): EventListener | null;
    removeAccount(id: number): MinecraftAccount;
    restoreInitial(): void;
    swapAccounts(index1: number, index2: number): void;
    unfavoriteAccount(id: number): void;
    unregister(): void;
}