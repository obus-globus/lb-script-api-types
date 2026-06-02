import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleDamageParticles$Particle extends Record {
    constructor(startTime: number, text: string, color: Color4b, pos: Vec3)
    // private color: Color4b;
    /*not mapped: */ color(): Color4b;
    // private pos: Vec3;
    /*not mapped: */ pos(): Vec3;
    // private startTime: number;
    /*not mapped: */ startTime(): number;
    // private text: string;
    /*not mapped: */ text(): string;
    component1(): number;
    component2(): string;
    component3(): Color4b;
    component4(): Vec3;
    copy(startTime: number, text: string, color: Color4b, pos: Vec3): ModuleDamageParticles$Particle;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}