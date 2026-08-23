import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { LazyRenderTargetHolder } from '../../../../../net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
/**
 * @param blitPipeline should use `core/screenquad` for drawing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.kt:34}
 */
export abstract class OverlayShaderRenderer extends Object implements MinecraftShortcuts {
    constructor(name: string, blitPipeline: RenderPipeline, useDepth: boolean, needDefaultUniforms: boolean)
    // private blitPipeline: RenderPipeline;
    dirty: boolean;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly name: string;
    // private needDefaultUniforms: boolean;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    // private renderTargetHolder: LazyRenderTargetHolder;
    // private sampler: GpuSampler;
    // private useDepth: boolean;
    readonly world: ClientLevel;
    drawBlitIfDirty(target: RenderTarget): void;
    protected onRender(pass: RenderPass): void;
    protected postRender(): void;
    protected preRender(): void;
    prepareRenderTarget(): RenderTarget;
    shouldRender(): boolean;
}