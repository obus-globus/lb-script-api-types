import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PropertyAccessorRenderingPolicy extends Enum<PropertyAccessorRenderingPolicy> {
    static DEBUG: PropertyAccessorRenderingPolicy;
    static NONE: PropertyAccessorRenderingPolicy;
    static PRETTY: PropertyAccessorRenderingPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PropertyAccessorRenderingPolicy;
    static values(): PropertyAccessorRenderingPolicy[];
    private constructor()
    name(): "PRETTY" | "DEBUG" | "NONE";
}