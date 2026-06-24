import type { PresenceStatusDto } from '../../../../../../com/mojang/authlib/yggdrasil/response/PresenceStatusDto.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { SpriteIconButton } from '../../../../../../net/minecraft/client/gui/components/SpriteIconButton.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { AbstractFriendsEntryContainerWidget } from '../../../../../../net/minecraft/client/gui/screens/friends/AbstractFriendsEntryContainerWidget.d.ts'
import type { FriendsOverlayScreen } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendsOverlayScreen.d.ts'
import type { PlayerSocialManager$PlayerData } from '../../../../../../net/minecraft/client/gui/screens/social/PlayerSocialManager$PlayerData.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class FriendEntry extends AbstractFriendsEntryContainerWidget {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, screen: FriendsOverlayScreen, playerData: PlayerSocialManager$PlayerData, presence: PresenceStatusDto, initiallyLoading: boolean, onAction: () => void)
    // private presence: PresenceStatusDto;
    // private removeButton: SpriteIconButton;
    // private statusWidget: StringWidget;
    applyPresence(newPresence: PresenceStatusDto): void;
    // private confirmRemoveFriend(action: () => void): void;
    disable(): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getEntryNarration(): Component;
    presenceStatusSortOrder(): number;
}