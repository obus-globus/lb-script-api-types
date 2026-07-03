import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { Event } from '../../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoAccount$MessageSource } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoAccount$MessageSource.d.ts'
/**
 * Auto account module
 *
 * Automatically handles logins or registrations on servers when requested.
 *
 * Command: {@link CommandAutoAccount}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoAccount.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoAccount.kt:42}
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
    // private createMessageHandler<T extends Event>(messageSource: ModuleAutoAccount$MessageSource, textProvider: (param0: T) => string | null): void;
    login(): void;
    onDisabled(): void;
    register(): void;
}