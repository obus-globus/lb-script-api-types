import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { TutorialToast$Icons } from '../../../../../../net/minecraft/client/gui/components/toasts/TutorialToast$Icons.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class TutorialToast extends Object implements Toast {
    static DEFAULT_WIDTH: number;
    static NO_TOKEN: Object;
    static PROGRESS_BAR_HEIGHT: number;
    static PROGRESS_BAR_MARGIN_BOTTOM: number;
    static PROGRESS_BAR_WIDTH: number;
    static PROGRESS_BAR_X: number;
    static SLOT_HEIGHT: number;
    constructor(font: Font, icon: TutorialToast$Icons, title: Component, message: Component, progressable: boolean)
    constructor(font: Font, icon: TutorialToast$Icons, title: Component, message: Component, progressable: boolean, timeToDisplayMs: number)
    // private icon: TutorialToast$Icons;
    // private lastSmoothingTime: number;
    // private lines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private progress: number;
    // private progressable: boolean;
    // private smoothedProgress: number;
    // private timeToDisplayMs: number;
    // private visibility: Toast$Visibility;
    // private contentHeight(): number;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    getSoundEvent(): SoundEvent;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    height(): number;
    hide(): void;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    updateProgress(progress: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}