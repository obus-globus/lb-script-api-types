import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class IInsnListEx$SpecialNodeType extends Enum<IInsnListEx$SpecialNodeType> {
    static CTOR_BODY: IInsnListEx$SpecialNodeType;
    static DELEGATE_CTOR: IInsnListEx$SpecialNodeType;
    static INITIALISER_INJECTION_POINT: IInsnListEx$SpecialNodeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IInsnListEx$SpecialNodeType;
    static values(): (Object | null)[];
    private constructor()
    name(): "DELEGATE_CTOR" | "INITIALISER_INJECTION_POINT" | "CTOR_BODY";
}