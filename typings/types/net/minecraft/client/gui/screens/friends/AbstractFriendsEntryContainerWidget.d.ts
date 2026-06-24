import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractContainerWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractContainerWidget.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { PlayerFaceWidget } from '../../../../../../net/minecraft/client/gui/components/PlayerFaceWidget.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FriendsOverlayScreen } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendsOverlayScreen.d.ts'
import type { PlayerSocialManager$PlayerData } from '../../../../../../net/minecraft/client/gui/screens/social/PlayerSocialManager$PlayerData.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractFriendsEntryContainerWidget extends AbstractContainerWidget {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, screen: FriendsOverlayScreen, x: number, y: number, width: number, height: number, playerData: PlayerSocialManager$PlayerData)
    constructor(minecraft: Minecraft, screen: FriendsOverlayScreen, x: number, y: number, width: number, height: number, playerData: PlayerSocialManager$PlayerData, showingStatus: boolean)
    // private children: AbstractWidget[];
    // private minecraft: Minecraft;
    // private nameWidget: StringWidget;
    // private playerFaceWidget: PlayerFaceWidget;
    // private playerId: UUID;
    // private playerName: string;
    // private screen: FriendsOverlayScreen;
    // private showingStatus: boolean;
    addChild(child: AbstractWidget): void;
    children(): GuiEventListener[];
    contentHeight(): number;
    disable(): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getEntryNarration(): Component;
    getNarratables(): NarratableEntry[];
    playerId(): UUID;
    removeChild(child: AbstractWidget): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}