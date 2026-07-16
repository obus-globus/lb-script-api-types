import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PropertyInfo$Name extends Enum<PropertyInfo$Name> {
    static bound: PropertyInfo$Name;
    static description: PropertyInfo$Name;
    static enumerationValues: PropertyInfo$Name;
    static expert: PropertyInfo$Name;
    static hidden: PropertyInfo$Name;
    static preferred: PropertyInfo$Name;
    static required: PropertyInfo$Name;
    static visualUpdate: PropertyInfo$Name;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PropertyInfo$Name;
    static values(): PropertyInfo$Name[];
    private constructor()
    name(): "bound" | "expert" | "hidden" | "preferred" | "required" | "visualUpdate" | "description" | "enumerationValues";
}