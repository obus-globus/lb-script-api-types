import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { CrystalAuraDamageOptions$RequestingSubmodule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions$RequestingSubmodule.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CrystalAuraDamageOptions$CheckedEntity extends Enum<CrystalAuraDamageOptions$CheckedEntity> {
    static OTHER: CrystalAuraDamageOptions$CheckedEntity;
    static SELF: CrystalAuraDamageOptions$CheckedEntity;
    static TARGET: CrystalAuraDamageOptions$CheckedEntity;
    static getEntries(): CrystalAuraDamageOptions$CheckedEntity[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CrystalAuraDamageOptions$CheckedEntity;
    static values(): (Object | null)[];
    private constructor()
    getDamage(entity: LivingEntity, requestingSubmodule: CrystalAuraDamageOptions$RequestingSubmodule, crystal: Vec3, maxBlastResistance: number | null, include: BlockPos | null): DamageProvider;
    name(): "SELF" | "TARGET" | "OTHER";
}