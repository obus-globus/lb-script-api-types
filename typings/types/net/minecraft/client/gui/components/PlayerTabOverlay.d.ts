import type { IPlayerTabOverlay } from '../../../../../com/viaversion/viafabricplus/visuals/injection/access/r1_7_tab_list_tyle/IPlayerTabOverlay.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Hud } from '../../../../../net/minecraft/client/gui/Hud.d.ts'
import type { PlayerTabOverlay$HealthState } from '../../../../../net/minecraft/client/gui/components/PlayerTabOverlay$HealthState.d.ts'
import type { PlayerTabOverlay$ScoreDisplayEntry } from '../../../../../net/minecraft/client/gui/components/PlayerTabOverlay$ScoreDisplayEntry.d.ts'
import type { PlayerInfo } from '../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Objective } from '../../../../../net/minecraft/world/scores/Objective.d.ts'
import type { Scoreboard } from '../../../../../net/minecraft/world/scores/Scoreboard.d.ts'
export class PlayerTabOverlay extends Object implements IPlayerTabOverlay {
    static MAX_ROWS_PER_COL: number;
    constructor(minecraft: Minecraft, hud: Hud)
    footer: Component;
    header: Component;
    // private healthStates: Map<UUID, PlayerTabOverlay$HealthState>;
    // private hud: Hud;
    // private minecraft: Minecraft;
    // private viaFabricPlusVisuals$hideSkins: boolean;
    // private viaFabricPlusVisuals$maxSlots: number;
    readonly visible: boolean;
    // private decorateName(info: PlayerInfo, name: MutableComponent): Component;
    extractPingIcon(graphics: GuiGraphicsExtractor, slotWidth: number, xo: number, yo: number, info: PlayerInfo): void;
    extractRenderState(graphics: GuiGraphicsExtractor, screenWidth: number, scoreboard: Scoreboard, displayObjective: Objective): void;
    // private extractTablistHearts(yo: number, left: number, right: number, profileId: UUID, graphics: GuiGraphicsExtractor, score: number): void;
    // private extractTablistScore(displayObjective: Objective, yo: number, entry: PlayerTabOverlay$ScoreDisplayEntry, left: number, right: number, profileId: UUID, graphics: GuiGraphicsExtractor): void;
    getNameForDisplay(info: PlayerInfo): Component;
    // private getPlayerInfos(): PlayerInfo[];
    reset(): void;
    setFooter(footer: Component): void;
    setHeader(header: Component): void;
    setVisible(visible: boolean): void;
    viaFabricPlusVisuals$setMaxPlayers(arg0: number): void;
    // private viaFabricPlusVisuals$transpose(arg0: (Object | null)[]): (Object | null)[];
}