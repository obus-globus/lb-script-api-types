import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ObjectiveCriteriaRenderType extends Enum<ObjectiveCriteriaRenderType> {
    static HEARTS: ObjectiveCriteriaRenderType;
    static INTEGER: ObjectiveCriteriaRenderType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ObjectiveCriteriaRenderType;
    static values(): ObjectiveCriteriaRenderType[];
    private constructor()
    name(): "INTEGER" | "HEARTS";
}