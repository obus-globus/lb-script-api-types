import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface MixinEntityAccessor extends Object{
    position(arg0: Vec3): void;
    xRot(arg0: number): void;
    yRot(arg0: number): void;
}