import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export interface Entity$MoveFunction extends Object{
    accept(target: Entity, x: number, y: number, z: number): void;
}