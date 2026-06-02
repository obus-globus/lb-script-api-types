import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
export class ToastManager$ToastInstance<T extends Toast> extends Object {
    private constructor(null_: ToastManager$ToastInstance<T>, firstSlotIndex: number, occupiedSlotCount: number)
    // private animationStartTime: number;
    // private becameFullyVisibleAt: number;
    // private firstSlotIndex: number;
    // private fullyVisibleFor: number;
    // private hasFinishedRendering: boolean;
    // private occupiedSlotCount: number;
    readonly toast: T;
    // private visibility: Toast$Visibility;
    // private visiblePortion: number;
    // private calculateVisiblePortion(now: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, screenWidth: number): void;
    getToast(): T;
    hasFinishedRendering(): boolean;
    resetToast(): void;
    update(): void;
}