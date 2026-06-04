import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AdvancementToast extends Object implements Toast {
    static DEFAULT_WIDTH: number;
    static DISPLAY_TIME: number;
    static NO_TOKEN: Object;
    static SLOT_HEIGHT: number;
    constructor(advancement: AdvancementHolder)
    // private advancement: AdvancementHolder;
    // private iconItem: ItemStack;
    readonly wantedVisibility: Toast$Visibility;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    getSoundEvent(): SoundEvent;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    // private isChallengeAdvancement(): boolean;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}