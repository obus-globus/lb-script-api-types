import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GameRenderer } from '../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LightmapRenderState } from '../../../../net/minecraft/client/renderer/state/LightmapRenderState.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class LightmapRenderStateExtractor extends Object {
    static WHITE: Vector3fc;
    constructor(renderer: GameRenderer, minecraft: Minecraft)
    // private blockLightFlicker: number;
    // private minecraft: Minecraft;
    // private needsUpdate: boolean;
    // private randomSource: RandomSource;
    // private renderer: GameRenderer;
    // private calculateDarknessScale(camera: LivingEntity, darknessGamma: number, partialTickTime: number): number;
    extract(renderState: LightmapRenderState, partialTicks: number): void;
    tick(): void;
}