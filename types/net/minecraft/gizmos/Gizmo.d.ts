import type { Object } from '../../../java/lang/Object.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
export interface Gizmo extends Object{
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
}