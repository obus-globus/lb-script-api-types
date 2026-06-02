import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface EntityAttachment$Fallback extends Object{
    create(width: number, height: number): Vec3[];
}