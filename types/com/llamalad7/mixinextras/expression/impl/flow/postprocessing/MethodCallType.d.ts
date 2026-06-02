import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MethodCallType extends Enum<MethodCallType> {
    static NORMAL: MethodCallType;
    static STATIC: MethodCallType;
    static SUPER: MethodCallType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MethodCallType;
    static values(): (Object | null)[];
    private constructor()
    matches(arg0: FlowValue): boolean;
    name(): "NORMAL" | "SUPER" | "STATIC";
}