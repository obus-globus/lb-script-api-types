import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { EntityAttachment$Fallback } from '../../../../net/minecraft/world/entity/EntityAttachment$Fallback.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityAttachment extends Enum<EntityAttachment> {
    static NAME_TAG: EntityAttachment;
    static PASSENGER: EntityAttachment;
    static VEHICLE: EntityAttachment;
    static WARDEN_CHEST: EntityAttachment;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EntityAttachment;
    static values(): (Object | null)[];
    private constructor(fallback: EntityAttachment$Fallback)
    // private fallback: EntityAttachment$Fallback;
    createFallbackPoints(width: number, height: number): Vec3[];
    name(): "PASSENGER" | "VEHICLE" | "NAME_TAG" | "WARDEN_CHEST";
}