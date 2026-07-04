import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A holder for a RenderTarget that initializes it lazily and handles resizing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:32}
 */
export class LazyRenderTargetHolder extends Object implements AutoCloseable {
    constructor(name: string, useDepth: boolean)
    readonly name: string;
    readonly raw: RenderTarget | null;
    useDepth: boolean;
    /**
     * Destroys the buffers and releases the RenderTarget.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:42}
     */
    close(): void;
    /**
     * Initializes the RenderTarget if needed, or resizes/clears it if it already exists, then returns it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.kt:50}
     */
    initAndGet(): RenderTarget;
}