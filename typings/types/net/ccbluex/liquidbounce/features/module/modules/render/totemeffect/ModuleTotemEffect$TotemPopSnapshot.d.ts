import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleTotemEffect$TotemPopSnapshot extends Object {
    constructor(entity: Entity)
    constructor(pos: Vec3, xRot: number, yRot: number, bbHeight: number)
    readonly bbHeight: number;
    readonly pos: Vec3;
    // private xRot: number;
    /*not mapped: */ getXRot(): number;
    // private yRot: number;
    /*not mapped: */ getYRot(): number;
    component1(): Vec3;
    component2(): number;
    component3(): number;
    component4(): number;
    copy(pos: Vec3, xRot: number, yRot: number, bbHeight: number): ModuleTotemEffect$TotemPopSnapshot;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}