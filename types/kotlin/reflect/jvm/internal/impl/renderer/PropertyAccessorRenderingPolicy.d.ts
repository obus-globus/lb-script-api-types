import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PropertyAccessorRenderingPolicy extends Enum<PropertyAccessorRenderingPolicy> {
    static DEBUG: PropertyAccessorRenderingPolicy;
    static NONE: PropertyAccessorRenderingPolicy;
    static PRETTY: PropertyAccessorRenderingPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PropertyAccessorRenderingPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "PRETTY" | "DEBUG" | "NONE";
}