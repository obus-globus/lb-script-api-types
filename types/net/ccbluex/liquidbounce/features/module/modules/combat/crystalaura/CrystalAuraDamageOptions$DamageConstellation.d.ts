import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CrystalAuraDamageOptions$RequestingSubmodule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions$RequestingSubmodule.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CrystalAuraDamageOptions$DamageConstellation extends Record {
    constructor(entity: LivingEntity, pos: BlockPos, crystal: Vec3, requestingSubmodule: CrystalAuraDamageOptions$RequestingSubmodule)
    // private crystal: Vec3;
    /*not mapped: */ crystal(): Vec3;
    // private entity: LivingEntity;
    /*not mapped: */ entity(): LivingEntity;
    // private pos: BlockPos;
    /*not mapped: */ pos(): BlockPos;
    // private requestingSubmodule: CrystalAuraDamageOptions$RequestingSubmodule;
    /*not mapped: */ requestingSubmodule(): CrystalAuraDamageOptions$RequestingSubmodule;
    component1(): LivingEntity;
    component2(): BlockPos;
    component3(): Vec3;
    component4(): CrystalAuraDamageOptions$RequestingSubmodule;
    copy(entity: LivingEntity, pos: BlockPos, crystal: Vec3, requestingSubmodule: CrystalAuraDamageOptions$RequestingSubmodule): CrystalAuraDamageOptions$DamageConstellation;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}