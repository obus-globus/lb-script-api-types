import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { MusicToastDisplayState } from '../../../../../../net/minecraft/client/MusicToastDisplayState.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NowPlayingToast } from '../../../../../../net/minecraft/client/gui/components/toasts/NowPlayingToast.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { ToastManager$ToastInstance } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager$ToastInstance.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class ToastManager extends Object {
    constructor(minecraft: Minecraft, options: Options)
    readonly minecraft: Minecraft;
    // private nowPlayingToast: ToastManager$ToastInstance<NowPlayingToast>;
    // private occupiedSlots: BitSet;
    // private playedToastSounds: SoundEvent[];
    // private queued: Toast[];
    // private visibleToasts: ToastManager$ToastInstance<Object>[];
    addToast(toast: Toast): void;
    clear(): void;
    extractRenderState(graphics: GuiGraphicsExtractor): void;
    // private findFreeSlotsIndex(requiredCount: number): number;
    // private freeSlotCount(): number;
    getMinecraft(): Minecraft;
    getNotificationDisplayTimeMultiplier(): number;
    getToast<T extends Toast>(clazz: Class<T>, token: Object): T;
    hideNowPlayingToast(): void;
    // private initializeMusicToast(state: MusicToastDisplayState): void;
    setMusicToastDisplayState(state: MusicToastDisplayState): void;
    showNowPlayingToast(): void;
    update(): void;
}