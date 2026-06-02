import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface GameEventListenerRenderer$ListenerVisitor extends Object{
    accept(origin: Vec3, radius: number): void;
}