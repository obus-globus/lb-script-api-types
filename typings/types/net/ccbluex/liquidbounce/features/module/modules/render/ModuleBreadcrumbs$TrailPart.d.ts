import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleBreadcrumbs$TrailPart extends Record {
    constructor(pos: Vec3, creationTime: number)
    // private creationTime: number;
    /*not mapped: */ creationTime(): number;
    // private pos: Vec3;
    /*not mapped: */ pos(): Vec3;
    component1(): Vec3;
    component2(): number;
    copy(pos: Vec3, creationTime: number): ModuleBreadcrumbs$TrailPart;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}