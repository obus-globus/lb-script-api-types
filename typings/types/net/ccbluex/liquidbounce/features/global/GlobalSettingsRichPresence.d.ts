import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { DiscordActivity$Button } from '../../../../../net/ccbluex/discordipc/DiscordActivity$Button.d.ts'
import type { DiscordIpcClient } from '../../../../../net/ccbluex/discordipc/DiscordIpcClient.d.ts'
import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ClientShutdownEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { GlobalSettingsRichPresence$LargeImageConfig } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$LargeImageConfig.d.ts'
import type { GlobalSettingsRichPresence$PresenceActivityType } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$PresenceActivityType.d.ts'
import type { GlobalSettingsRichPresence$PresenceStatusDisplayType } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$PresenceStatusDisplayType.d.ts'
import type { GlobalSettingsRichPresence$RichPresencePart } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$RichPresencePart.d.ts'
import type { GlobalSettingsRichPresence$SmallImageConfig } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$SmallImageConfig.d.ts'
/**
 * Discord Rich Presence
 *
 * todo: use ordered multi choose (https://github.com/CCBlueX/LiquidBounce/pull/7350), which allows
 *   custom ordering of parts.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt:53}
 */
export class GlobalSettingsRichPresence extends ToggleableValueGroup {
    static INSTANCE: GlobalSettingsRichPresence;
    // private IPC_APP_ID: number;
    // private activityType: GlobalSettingsRichPresence$PresenceActivityType;
    // private /*not mapped: */ getActivityType(): GlobalSettingsRichPresence$PresenceActivityType;
    // private buttons: DiscordActivity$Button[];
    // private detailsParts: GlobalSettingsRichPresence$RichPresencePart[];
    // private /*not mapped: */ getDetailsParts(): GlobalSettingsRichPresence$RichPresencePart[];
    // private doNotTryToConnect: boolean;
    // private ipcClient: DiscordIpcClient | null;
    // private largeImage: GlobalSettingsRichPresence$LargeImageConfig;
    /**
     * Always running after initialized
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt#L231 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt:231}
     */
    readonly running: boolean;
    // private separatorText: string;
    // private /*not mapped: */ getSeparatorText(): string;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    // private smallImage: GlobalSettingsRichPresence$SmallImageConfig;
    // private stateParts: GlobalSettingsRichPresence$RichPresencePart[];
    // private /*not mapped: */ getStateParts(): GlobalSettingsRichPresence$RichPresencePart[];
    // private statusDisplayType: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    // private /*not mapped: */ getStatusDisplayType(): GlobalSettingsRichPresence$PresenceStatusDisplayType;
    // private timestamp: Instant;
    // private updateCycle: EventHook<GameTickEvent>;
    // private buildText(parts: GlobalSettingsRichPresence$RichPresencePart[]): string;
    // private connectIpc(): void;
    onEnabled(): void;
    // private shutdownIpc(): void;
}