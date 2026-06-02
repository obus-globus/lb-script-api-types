import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SpectatorMenu } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenu.d.ts'
import type { SpectatorMenuItem } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerSkin } from '../../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
import type { PlayerTeam } from '../../../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
export class TeleportToTeamMenuCategory$TeamSelectionItem extends Object implements SpectatorMenuItem {
    static create(paramminecraft: Minecraft, paramteam: PlayerTeam): Optional<SpectatorMenuItem>;
    private constructor(team: PlayerTeam, players: PlayerInfo[], iconSkin: () => PlayerSkin)
    // private iconSkin: () => PlayerSkin;
    // private players: PlayerInfo[];
    // private team: PlayerTeam;
    extractIcon(graphics: GuiGraphicsExtractor, brightness: number, alpha: number): void;
    getName(): Component;
    isEnabled(): boolean;
    selectItem(menu: SpectatorMenu): void;
}