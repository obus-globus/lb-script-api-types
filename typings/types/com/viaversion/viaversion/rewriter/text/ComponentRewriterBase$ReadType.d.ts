import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ComponentRewriterBase$ReadType extends Enum<ComponentRewriterBase$ReadType> {
    static JSON: ComponentRewriterBase$ReadType;
    static NBT: ComponentRewriterBase$ReadType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ComponentRewriterBase$ReadType;
    static values(): ComponentRewriterBase$ReadType[];
    private constructor()
    name(): "JSON" | "NBT";
}