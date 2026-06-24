import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ResolvableProfile } from '../../../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class FriendToast extends Object implements Toast {
    static DEFAULT_WIDTH: number;
    static NO_TOKEN: Object;
    static SLOT_HEIGHT: number;
    static add(paramtoastManager: ToastManager, paramfont: Font, paramskinProfile: ResolvableProfile, parammessage: Component): void;
    static showFriendAdded(paramminecraft: Minecraft, paramnickname: string, paramplayerId: UUID): void;
    static showFriendRequestAccepted(paramminecraft: Minecraft, paramnickname: string, paramplayerId: UUID): void;
    static showFriendRequestReceived(paramminecraft: Minecraft, paramnickname: string, paramplayerId: UUID): void;
    static showFriendRequestSent(paramminecraft: Minecraft, paramnickname: string): void;
    constructor(font: Font, skinProfile: ResolvableProfile, message: Component)
    constructor(font: Font, skinProfile: ResolvableProfile, message: Component, displayTimeMs: number)
    // private displayTimeMs: number;
    // private messageLines: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    // private skinProfile: ResolvableProfile;
    // private visibility: Toast$Visibility;
    // private contentHeight(): number;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    getSoundEvent(): SoundEvent;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    hide(): void;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}