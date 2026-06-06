import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { ContainerObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList$Entry.d.ts'
import type { Tooltip } from '../../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { SocialInteractionsScreen } from '../../../../../../net/minecraft/client/gui/screens/social/SocialInteractionsScreen.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { PlayerSkin } from '../../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class PlayerEntry extends ContainerObjectSelectionList$Entry<PlayerEntry> {
    static BG_FILL: number;
    static BG_FILL_REMOVED: number;
    static CONTENT_PADDING: number;
    static PLAYERNAME_COLOR: number;
    static PLAYER_STATUS_COLOR: number;
    static SKIN_SHADE: number;
    constructor(minecraft: Minecraft, socialInteractionsScreen: SocialInteractionsScreen, id: UUID, playerName: string, skinGetter: () => PlayerSkin, chatReportable: boolean)
    readonly chatReportable: boolean;
    // private children: AbstractWidget[];
    // private hasDraftReport: boolean;
    // private hideButton: Button;
    // private id: UUID;
    // private isRemoved: boolean;
    // private minecraft: Minecraft;
    readonly playerName: string;
    // private reportButton: Button;
    // private reportingEnabled: boolean;
    // private showButton: Button;
    readonly skinGetter: () => PlayerSkin;
    // private tooltipHoverTime: number;
    children(): GuiEventListener[];
    // private createReportButtonTooltip(): Tooltip;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    // private getEntryNarationMessage(buttonNarrationMessage: MutableComponent): MutableComponent;
    getPlayerId(): UUID;
    getPlayerName(): string;
    getSkinGetter(): () => PlayerSkin;
    // private getStatusComponent(): Component;
    hasRecentMessages(): boolean;
    isChatReportable(): boolean;
    isRemoved(): boolean;
    narratables(): NarratableEntry[];
    // private onHiddenOrShown(isHidden: boolean, message: Component): void;
    refreshHasDraftReport(reportingContext: ReportingContext): void;
    setHasRecentMessages(hasRecentMessages: boolean): void;
    setRemoved(isRemoved: boolean): void;
    // private updateHideAndShowButton(isHidden: boolean): void;
}