import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A holder for a RenderTarget that initializes it lazily and handles resizing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:28}
 */
export class LazyRenderTargetHolder extends Object implements AutoCloseable {
    constructor(name: string, useDepth: boolean)
    readonly name: string;
    readonly raw: RenderTarget | null;
    useDepth: boolean;
    /**
     * Destroys the buffers and releases the RenderTarget.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:38}
     */
    close(): void;
    /**
     * Initializes the RenderTarget if needed, or resizes/clears it if it already exists, then returns it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:46}
     */
    initAndGet(): RenderTarget;
}