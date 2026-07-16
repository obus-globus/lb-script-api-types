import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ScoreboardData$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/ScoreboardData$Companion.d.ts'
import type { ScoreboardData$SidebarEntry } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/ScoreboardData$SidebarEntry.d.ts'
import type { Component } from '../../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Scoreboard } from '../../../../../../../../../net/minecraft/world/scores/Scoreboard.d.ts'
export class ScoreboardData extends Record {
    static Companion: ScoreboardData$Companion;
    /**
     * Creates a {@link ScoreboardData} from the players's scoreboard
     *
     * Taken from the Minecraft source code
     *
     * @see net.minecraft.client.gui.Hud.extractScoreboardSidebar
     * @see net.minecraft.client.gui.Hud.displayScoreboardSidebar
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerFunctions.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerFunctions.kt:189}
     */
    static fromScoreboard(scoreboard: Scoreboard | null): ScoreboardData | null;
    constructor(header: Component, entries: (ScoreboardData$SidebarEntry | null)[])
    // private entries: (ScoreboardData$SidebarEntry | null)[];
    /*not mapped: */ entries(): (ScoreboardData$SidebarEntry | null)[];
    // private header: Component;
    /*not mapped: */ header(): Component;
    component1(): Component;
    component2(): (ScoreboardData$SidebarEntry | null)[];
    copy(header: Component, entries: (ScoreboardData$SidebarEntry | null)[]): ScoreboardData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}