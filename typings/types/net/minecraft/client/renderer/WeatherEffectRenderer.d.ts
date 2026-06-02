import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { WeatherEffectRenderer$ColumnInstance } from '../../../../net/minecraft/client/renderer/WeatherEffectRenderer$ColumnInstance.d.ts'
import type { WeatherRenderState } from '../../../../net/minecraft/client/renderer/state/level/WeatherRenderState.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ParticleStatus } from '../../../../net/minecraft/server/level/ParticleStatus.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome$Precipitation } from '../../../../net/minecraft/world/level/biome/Biome$Precipitation.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WeatherEffectRenderer extends Object {
    constructor()
    // private columnSizeX: number[];
    // private columnSizeZ: number[];
    // private rainSoundTime: number;
    // private createRainColumnInstance(random: RandomSource, ticks: number, x: number, bottomY: number, topY: number, z: number, lightCoords: number, partialTicks: number): WeatherEffectRenderer$ColumnInstance;
    // private createSnowColumnInstance(random: RandomSource, ticks: number, x: number, bottomY: number, topY: number, z: number, lightCoords: number, partialTicks: number): WeatherEffectRenderer$ColumnInstance;
    extractRenderState(level: Level, ticks: number, partialTicks: number, cameraPos: Vec3, renderState: WeatherRenderState): void;
    // private getPrecipitationAt(level: Level, pos: BlockPos): Biome$Precipitation;
    render(cameraPos: Vec3, renderState: WeatherRenderState): void;
    // private render$mixinextras$wrapped$18(arg0: Vec3, arg1: WeatherRenderState): void;
    // private renderInstances(builder: VertexConsumer, columns: WeatherEffectRenderer$ColumnInstance[], cameraPos: Vec3, maxAlpha: number, radius: number, intensity: number): void;
    // private renderWeather(renderPass: RenderPass, texture: AbstractTexture, startColumn: number, columnCount: number): void;
    tickRainParticles(level: ClientLevel, camera: Camera, ticks: number, particleStatus: ParticleStatus, weatherRadius: number): void;
    // private tickRainParticles$mixinextras$wrapped$20(arg0: ClientLevel, arg1: Camera, arg2: number, arg3: ParticleStatus, arg4: number): void;
}