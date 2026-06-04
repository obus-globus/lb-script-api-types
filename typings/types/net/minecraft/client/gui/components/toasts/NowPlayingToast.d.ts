import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class NowPlayingToast extends Object implements Toast {
    static DEFAULT_WIDTH: number;
    static NO_TOKEN: Object;
    static SLOT_HEIGHT: number;
    static extractToast(paramgraphics: GuiGraphicsExtractor, paramfont: Font): void;
    static tickMusicNotes(): void;
    constructor()
    // private minecraft: Minecraft;
    // private notificationDisplayTimeMultiplier: number;
    // private updateToast: boolean;
    readonly wantedVisibility: Toast$Visibility;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    getSoundEvent(): SoundEvent;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    setWantedVisibility(visibility: Toast$Visibility): void;
    showToast(options: Options): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}