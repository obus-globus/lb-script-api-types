import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Background } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Background.d.ts'
import type { ThemeBackground } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground.d.ts'
import type { ThemeBackground$Shader$Companion } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground$Shader$Companion.d.ts'
import type { ThemeMetadata } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeMetadata.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { MappableRingBuffer } from '../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
/**
 * Background implementation that renders using a custom shader.
 *
 * @param pipeline the shader render pipeline
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:104}
 */
export class ThemeBackground$Shader extends Object implements ThemeBackground {
    static Companion: ThemeBackground$Shader$Companion;
    static build(metadata: ThemeMetadata, background: Background, fragmentShader: string): ThemeBackground$Shader;
    private constructor(metadata: ThemeMetadata, pipeline: RenderPipeline, fshId: Identifier, fragmentShader: string)
    // private background: GpuTexture | null;
    // private backgroundView: GpuTextureView | null;
    // private fragmentShader: string;
    // private fshId: Identifier;
    // private metadata: ThemeMetadata;
    // private pipeline: RenderPipeline;
    // private textureSetup: TextureSetup | null;
    // private ubo: MappableRingBuffer;
    close(): void;
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    onResourceReload(): void;
    // private resizeIfNeeded(framebufferWidth: number, framebufferHeight: number): void;
}