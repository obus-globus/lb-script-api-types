import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoAccount$MessageSource } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoAccount$MessageSource.d.ts'
/**
 * Auto account module
 *
 * Automatically handles logins or registrations on servers when requested.
 *
 * Command: {@link CommandAutoAccount}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoAccount.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoAccount.kt:35}
 */
export class ModuleAutoAccount extends ClientModule {
    static INSTANCE: ModuleAutoAccount;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private loginCommand: string;
    // private /*not mapped: */ getLoginCommand(): string;
    // private loginRegex: Regex;
    // private /*not mapped: */ getLoginRegex(): Regex;
    // private messageSources: ModuleAutoAccount$MessageSource[];
    // private /*not mapped: */ getMessageSources(): ModuleAutoAccount$MessageSource[];
    // private password: string;
    // private /*not mapped: */ getPassword(): string;
    // private registerCommand: string;
    // private /*not mapped: */ getRegisterCommand(): string;
    // private registerRegex: Regex;
    // private /*not mapped: */ getRegisterRegex(): Regex;
    readonly running: boolean;
    // private sending: boolean;
    // private action(operation: () => void): void;
    // private createMessageHandler(messageSource: ModuleAutoAccount$MessageSource, textProvider: (param0: T) => string | null): void;
    login(): void;
    onDisabled(): void;
    register(): void;
}