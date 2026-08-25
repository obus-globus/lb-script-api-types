import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThemeBackground } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground.d.ts'
import type { ThemeMetadata } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeMetadata.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
/**
 * Background implementation that renders a static image texture.
 *
 * @param texture The image texture
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:74}
 */
export class ThemeBackground$Image extends Object implements ThemeBackground {
    constructor(metadata: ThemeMetadata, image: NativeImage)
    // private metadata: ThemeMetadata;
    // private texture: DynamicTexture;
    // private textureSetup: TextureSetup;
    close(): void;
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    onResourceReload(): void;
}