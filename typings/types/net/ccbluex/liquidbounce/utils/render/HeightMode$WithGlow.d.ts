import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface HeightMode$WithGlow extends Object{
    getGlowHeight(entity: Entity, partialTicks: number): number;
}