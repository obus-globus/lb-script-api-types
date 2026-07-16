import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EntityReplacement$ComponentType extends Enum<EntityReplacement$ComponentType> {
    static JSON: EntityReplacement$ComponentType;
    static NONE: EntityReplacement$ComponentType;
    static PLAIN: EntityReplacement$ComponentType;
    static TAG: EntityReplacement$ComponentType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EntityReplacement$ComponentType;
    static values(): EntityReplacement$ComponentType[];
    private constructor()
    name(): "PLAIN" | "JSON" | "TAG" | "NONE";
}