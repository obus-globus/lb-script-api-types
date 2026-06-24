import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { RenderSystem$AutoStorageIndexBuffer } from '../../../../com/mojang/blaze3d/systems/RenderSystem$AutoStorageIndexBuffer.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldRenderingPhase } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SkyRenderState } from '../../../../net/minecraft/client/renderer/state/level/SkyRenderState.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { TextureAtlas } from '../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { AtlasManager } from '../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { MoonPhase } from '../../../../net/minecraft/world/level/MoonPhase.d.ts'
export class SkyRenderer extends Object implements AutoCloseable {
    constructor(textureManager: TextureManager, atlasManager: AtlasManager, renderTarget: RenderTarget)
    // private bottomSkyBuffer: GpuBuffer;
    // private celestialsAtlas: TextureAtlas;
    // private endFlashBuffer: GpuBuffer;
    // private endSkyBuffer: GpuBuffer;
    // private endSkyTexture: AbstractTexture;
    // private moonBuffer: GpuBuffer;
    // private quadIndices: RenderSystem$AutoStorageIndexBuffer;
    // private renderTarget: RenderTarget;
    // private starBuffer: GpuBuffer;
    // private starIndexCount: number;
    // private sunBuffer: GpuBuffer;
    // private sunriseBuffer: GpuBuffer;
    // private topSkyBuffer: GpuBuffer;
    // private buildSkyDisc(builder: VertexConsumer, yy: number): void;
    // private buildStars(): GpuBuffer;
    // private buildSunriseFan(): GpuBuffer;
    close(): void;
    extractRenderState(level: ClientLevel, partialTicks: number, camera: Camera, state: SkyRenderState): void;
    // private getSunPathRotation(): number;
    // private getTexture(textureManager: TextureManager, location: Identifier): AbstractTexture;
    renderDarkDisc(): void;
    renderEndFlash(poseStack: PoseStack, intensity: number, xAngle: number, yAngle: number): void;
    renderEndSky(): void;
    // private renderMoon(moonPhase: MoonPhase, rainBrightness: number, poseStack: PoseStack): void;
    renderSkyDisc(skyColor: number): void;
    // private renderStars(starBrightness: number, poseStack: PoseStack): void;
    // private renderSun(rainBrightness: number, poseStack: PoseStack): void;
    renderSunMoonAndStars(poseStack: PoseStack, sunAngle: number, moonAngle: number, starAngle: number, moonPhase: MoonPhase, rainBrightness: number, starBrightness: number): void;
    renderSunriseAndSunset(poseStack: PoseStack, sunAngle: number, sunriseAndSunsetColor: number): void;
    setPhase(arg0: WorldRenderingPhase): void;
    // private shouldRenderDarkDisc(deltaPartialTick: number, level: ClientLevel): boolean;
}