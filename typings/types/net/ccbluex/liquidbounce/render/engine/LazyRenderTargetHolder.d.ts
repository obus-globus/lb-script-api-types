import type { GpuFormat } from '../../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A holder for a RenderTarget that initializes it lazily and handles resizing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:33}
 */
export class LazyRenderTargetHolder extends Object implements AutoCloseable, Supplier<RenderTarget> {
    constructor(name: string, useDepth: boolean)
    readonly colorFormat: GpuFormat;
    readonly depthFormat: GpuFormat | null;
    readonly name: string;
    // private raw: RenderTarget | null;
    /**
     * Destroys the buffers and releases the RenderTarget.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:51}
     */
    close(): void;
    get(): RenderTarget | null;
    /**
     * Initializes the RenderTarget if needed, or resizes/clears it if it already exists, then returns it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:59}
     */
    initAndGet(): RenderTarget;
    initAndGet(width: number, height: number): RenderTarget;
}