import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { CachedUniform } from '../../../../../net/ccbluex/liquidbounce/render/buffers/CachedUniform.d.ts'
import type { BlurEffectRenderer$BlurBlendUniform } from '../../../../../net/ccbluex/liquidbounce/render/engine/BlurEffectRenderer$BlurBlendUniform.d.ts'
import type { BlurEffectRenderer$BlurKernelUniform } from '../../../../../net/ccbluex/liquidbounce/render/engine/BlurEffectRenderer$BlurKernelUniform.d.ts'
import type { LazyRenderTargetHolder } from '../../../../../net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class BlurEffectRenderer extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: BlurEffectRenderer;
    // private blurBlendUniform: CachedUniform<BlurEffectRenderer$BlurBlendUniform>;
    // private blurKernelUniform: CachedUniform<BlurEffectRenderer$BlurKernelUniform>;
    readonly debugDisplayName: Component;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    // private intermediateTarget: LazyRenderTargetHolder;
    // private isDrawingHudFramebuffer: boolean;
    /*not mapped: */ isDrawingHudFramebuffer(): boolean;
    // private lastTimeScreenOpened: Chronometer;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly overlayRenderTargetHolder: LazyRenderTargetHolder;
    // private overlaySampler: GpuSampler;
    readonly player: LocalPlayer;
    readonly running: boolean;
    // private wasScreenOpen: boolean;
    readonly world: ClientLevel;
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