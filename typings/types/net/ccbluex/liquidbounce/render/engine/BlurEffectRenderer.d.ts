import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { LazyRenderTargetHolder } from '../../../../../net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class BlurEffectRenderer extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: BlurEffectRenderer;
    // private GUI_BLUR_UNIFORM_BUFFER: GpuBufferSlice;
    // private isDrawingHudFramebuffer: boolean;
    /*not mapped: */ isDrawingHudFramebuffer(): boolean;
    // private lastAlphaBlendRange: ClosedFloatingPointRange<number>;
    // private lastBlurRadius: number;
    // private lastTimeScreenOpened: Chronometer;
    readonly overlayRenderTargetHolder: LazyRenderTargetHolder;
    // private overlaySampler: GpuSampler;
    // private wasScreenOpen: boolean;
    blitBlurOverlay(): void;
    children(): EventListener[];
    // private getBlurRadius(): number;
    // private getBlurRadiusFactor(): number;
    // private hasNoFullScreen(): boolean;
    parent(): EventListener | null;
    shouldDrawBlur(): boolean;
    unregister(): void;
}