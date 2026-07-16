import type { NamedType } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AfterAction extends Enum<AfterAction> implements NamedType {
    static CLOSE: AfterAction;
    static NONE: AfterAction;
    static WAIT_FOR_RESPONSE: AfterAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AfterAction;
    static values(): AfterAction[];
    private constructor(arg2: string)
    getName(): string;
    name(): "CLOSE" | "NONE" | "WAIT_FOR_RESPONSE";
}