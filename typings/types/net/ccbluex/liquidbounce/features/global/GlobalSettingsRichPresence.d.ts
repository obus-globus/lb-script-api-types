import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { IPCClient } from '../../../../../com/jagrosh/discordipc/IPCClient.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt:54}
 */
export class GlobalSettingsRichPresence extends ToggleableValueGroup {
    static INSTANCE: GlobalSettingsRichPresence;
    // private IPC_APP_ID: number;
    // private activityType: GlobalSettingsRichPresence$PresenceActivityType;
    // private /*not mapped: */ getActivityType(): GlobalSettingsRichPresence$PresenceActivityType;
    // private buttons: JsonElement[];
    // private detailsParts: GlobalSettingsRichPresence$RichPresencePart[];
    // private /*not mapped: */ getDetailsParts(): GlobalSettingsRichPresence$RichPresencePart[];
    // private doNotTryToConnect: boolean;
    // private ipcClient: IPCClient | null;
    // private largeImage: GlobalSettingsRichPresence$LargeImageConfig;
    /**
     * Always running after initialized
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt#L242 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence.kt:242}
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
    // private timestamp: number;
    // private updateCycle: EventHook<GameTickEvent>;
    // private buildText(parts: GlobalSettingsRichPresence$RichPresencePart[]): string;
    // private connectIpc(): void;
    onEnabled(): void;
    // private shutdownIpc(): void;
}