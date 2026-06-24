import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TranslucencyPointOfView extends Object {
    static of(paramcameraPos: Vec3, paramsectionNode: number): TranslucencyPointOfView;
    constructor()
    // private x: number;
    // private y: number;
    // private z: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isAxisAligned(): boolean;
    set(cameraPos: Vec3, sectionPos: number): TranslucencyPointOfView;
}