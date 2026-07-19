import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSpammer$MessageConverterMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleSpammer$MessageConverterMode.d.ts'
import type { ModuleSpammer$MessageProvider } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleSpammer$MessageProvider.d.ts'
import type { ModuleSpammer$SpammerPattern } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleSpammer$SpammerPattern.d.ts'
/**
 * Spammer module
 *
 * Spams the chat with a given message.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleSpammer.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleSpammer.kt:50}
 */
export class ModuleSpammer extends ClientModule {
    static INSTANCE: ModuleSpammer;
    // private MAX_CHARS: number;
    // private customFormatter: boolean;
    // private /*not mapped: */ getCustomFormatter(): boolean;
    // private delay: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getDelay(): ClosedFloatingPointRange<number>;
    // private message: ModeValueGroup<ModuleSpammer$MessageProvider>;
    // private messageConverterMode: ModuleSpammer$MessageConverterMode;
    // private /*not mapped: */ getMessageConverterMode(): ModuleSpammer$MessageConverterMode;
    // private mps: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getMps(): { start: number; endInclusive: number; step: number };
    // private pattern: ModuleSpammer$SpammerPattern;
    // private /*not mapped: */ getPattern(): ModuleSpammer$SpammerPattern;
    // private applyConversion(text: string): string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    enabledEffect($completion: Continuation<void>): any;
    // private format(text: string): string;
    // private sendMessageOrCommand(text: string): void;
}