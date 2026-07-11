import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { CachedUniform } from '../../../../../net/ccbluex/liquidbounce/render/CachedUniform.d.ts'
import type { BlurEffectRenderer$BlurBlendUniform } from '../../../../../net/ccbluex/liquidbounce/render/engine/BlurEffectRenderer$BlurBlendUniform.d.ts'
import type { BlurEffectRenderer$BlurKernelUniform } from '../../../../../net/ccbluex/liquidbounce/render/engine/BlurEffectRenderer$BlurKernelUniform.d.ts'
import type { LazyRenderTargetHolder } from '../../../../../net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class BlurEffectRenderer extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: BlurEffectRenderer;
    // private blurBlendUniform: CachedUniform<BlurEffectRenderer$BlurBlendUniform>;
    // private blurKernelUniform: CachedUniform<BlurEffectRenderer$BlurKernelUniform>;
    // private intermediateTarget: LazyRenderTargetHolder;
    // private isDrawingHudFramebuffer: boolean;
    /*not mapped: */ isDrawingHudFramebuffer(): boolean;
    // private lastTimeScreenOpened: Chronometer;
    readonly overlayRenderTargetHolder: LazyRenderTargetHolder;
    // private overlaySampler: GpuSampler;
    // private wasScreenOpen: boolean;
    blitBlurOverlay(): void;
    // private calculateKernelRadius(sigma: number): number;
    children(): EventListener[];
    // private getBlurRadiusFactor(): number;
    // private getSigma(): number;
    // private hasNoFullScreen(): boolean;
    parent(): EventListener | null;
    shouldDrawBlur(): boolean;
    unregister(): void;
}