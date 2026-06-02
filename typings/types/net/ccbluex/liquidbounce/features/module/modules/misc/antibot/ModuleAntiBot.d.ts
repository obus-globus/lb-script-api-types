import type { GameProfile } from '../../../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { TagEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { AntiBotMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotMode.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class ModuleAntiBot extends ClientModule {
    static INSTANCE: ModuleAntiBot;
    // private handleWorldChange: EventHook<WorldChangeEvent>;
    // private literalNPC: boolean;
    // private /*not mapped: */ getLiteralNPC(): boolean;
    readonly modes: ModeValueGroup<AntiBotMode>;
    // private notInTabList: boolean;
    // private /*not mapped: */ getNotInTabList(): boolean;
    // private tagHandler: EventHook<TagEntityEvent>;
    isADuplicate(profile: GameProfile): boolean;
    /**
     * Check if player might be a bot
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/ModuleAntiBot.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/ModuleAntiBot.kt:83}
     */
    isBot(player: Entity): boolean;
    /**
     * Checks if the game profile is known at most once in the player list.
     *
     * Used to prevent false positives when a player is on a minigame such as Practice and joins a duel
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/ModuleAntiBot.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/ModuleAntiBot.kt:74}
     */
    isGameProfileUnique(profile: GameProfile): boolean;
    // private isMissingFromTabList(player: Player): boolean;
    onDisabled(): void;
    // private reset(): void;
}