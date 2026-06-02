import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleTickBase$TickData extends Record {
    constructor(position: Vec3, fallDistance: number, velocity: Vec3, onGround: boolean)
    // private fallDistance: number;
    /*not mapped: */ fallDistance(): number;
    // private onGround: boolean;
    /*not mapped: */ onGround(): boolean;
    // private position: Vec3;
    /*not mapped: */ position(): Vec3;
    // private velocity: Vec3;
    /*not mapped: */ velocity(): Vec3;
    component1(): Vec3;
    component2(): number;
    component3(): Vec3;
    component4(): boolean;
    copy(position: Vec3, fallDistance: number, velocity: Vec3, onGround: boolean): ModuleTickBase$TickData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}