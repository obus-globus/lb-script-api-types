import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PotionFXSplash$SplashData extends Object {
    constructor(color: number, pos: Vec3)
    readonly color: number;
    readonly pos: Vec3;
    component1(): number;
    component2(): Vec3;
    copy(color: number, pos: Vec3): PotionFXSplash$SplashData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}