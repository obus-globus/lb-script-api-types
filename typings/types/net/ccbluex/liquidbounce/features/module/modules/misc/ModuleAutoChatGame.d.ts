import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ChatReceiveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
/**
 * Automatically solves chat game riddles.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoChatGame.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoChatGame.kt:39}
 */
export class ModuleAutoChatGame extends ClientModule {
    static INSTANCE: ModuleAutoChatGame;
    // private answerTemplate: string;
    // private /*not mapped: */ getAnswerTemplate(): string;
    // private baseUrl: string;
    // private /*not mapped: */ getBaseUrl(): string;
    // private bufferTime: number;
    // private /*not mapped: */ getBufferTime(): number;
    // private chatBuffer: string[];
    readonly chatHandler: EventHook<ChatReceiveEvent>;
    // private cooldownChronometer: Chronometer;
    // private cooldownMinutes: number;
    // private /*not mapped: */ getCooldownMinutes(): number;
    // private defaultPrompt: string;
    // private delayResponse: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelayResponse(): { start: number; endInclusive: number; step: number };
    // private includeTrigger: boolean;
    // private /*not mapped: */ getIncludeTrigger(): boolean;
    // private model: string;
    // private /*not mapped: */ getModel(): string;
    // private openAiKey: string;
    // private /*not mapped: */ getOpenAiKey(): string;
    // private prompt: string;
    // private /*not mapped: */ getPrompt(): string;
    // private serverName: string;
    // private /*not mapped: */ getServerName(): string;
    readonly tickHandler: EventHook<GameTickEvent>;
    // private triggerSentence: string;
    // private /*not mapped: */ getTriggerSentence(): string;
    // private triggerWordChronometer: Chronometer;
    onEnabled(): void;
}