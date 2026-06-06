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
     * @see Gui.extractScoreboardSidebar
     * @see Gui.displayScoreboardSidebar
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerFunctions.kt#L182 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerFunctions.kt:182}
     */
    static fromScoreboard(scoreboard: Scoreboard): ScoreboardData;
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