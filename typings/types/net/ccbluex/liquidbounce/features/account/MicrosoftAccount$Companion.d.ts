import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MicrosoftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MicrosoftAccount.d.ts'
import type { JavaAuthManager } from '../../../../../net/raphimc/minecraftauth/java/JavaAuthManager.d.ts'
import type { JavaAuthManager$Builder } from '../../../../../net/raphimc/minecraftauth/java/JavaAuthManager$Builder.d.ts'
import type { MsaApplicationConfig } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaDeviceCode } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaDeviceCode.d.ts'
import type { ExternalBrowserMsaAuthService } from '../../../../../net/raphimc/minecraftauth/msa/service/impl/ExternalBrowserMsaAuthService.d.ts'
export class MicrosoftAccount$Companion extends Object {
    // private DEFAULT_TIMEOUT_MS: number;
    /**
     * The official Minecraft (Java Edition) launcher application.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:92}
     */
    readonly JAVA_APPLICATION_CONFIG: MsaApplicationConfig;
    // private build(applicationConfig: MsaApplicationConfig, login: (param0: JavaAuthManager$Builder) => JavaAuthManager): MicrosoftAccount;
    /**
     * Does not support accounts with two-factor authentication enabled; use {@link buildFromWebView} or
     * {@link buildFromDeviceCode} for those.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L135 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:135}
     */
    buildFromCredentials(email: string, password: string, applicationConfig: MsaApplicationConfig): MicrosoftAccount;
    /**
     * {@link onDeviceCode} is invoked once with the code the user has to enter at the returned verification
     * URL; this blocks until the user completes the sign-in, the code expires, or {@link timeoutMs} elapses.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:120}
     */
    buildFromDeviceCode(onDeviceCode: (param0: MsaDeviceCode) => void, applicationConfig: MsaApplicationConfig, timeoutMs: number): MicrosoftAccount;
    /**
     * {@link applicationConfig} must match the one the refresh token was originally issued for.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:149}
     */
    buildFromRefreshToken(refreshToken: string, applicationConfig: MsaApplicationConfig): MicrosoftAccount;
    /**
     * Signs in through a browser the caller supplies. Preferred over the other flows, as it supports
     * 2FA, passkeys and everything else Microsoft offers.
     *
     * {@link onOpen} has to display {@link ExternalBrowserMsaAuthService.getAuthenticationUrl} and report the
     * URLs it navigates to back to the service; {@link onClose} runs once the sign-in has finished, failed
     * or timed out.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:105}
     */
    buildFromWebView(onOpen: (param0: ExternalBrowserMsaAuthService) => void, onClose: (param0: ExternalBrowserMsaAuthService) => void, applicationConfig: MsaApplicationConfig, timeoutMs: number): MicrosoftAccount;
}