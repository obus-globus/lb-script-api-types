import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export interface Toast extends Object{
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    getSoundEvent(): SoundEvent;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}