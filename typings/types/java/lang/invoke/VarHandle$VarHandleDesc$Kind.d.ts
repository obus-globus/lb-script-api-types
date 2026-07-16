import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { DirectMethodHandleDesc } from '../../../java/lang/constant/DirectMethodHandleDesc.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class VarHandle$VarHandleDesc$Kind extends Enum<VarHandle$VarHandleDesc$Kind> {
    static ARRAY: VarHandle$VarHandleDesc$Kind;
    static FIELD: VarHandle$VarHandleDesc$Kind;
    static STATIC_FIELD: VarHandle$VarHandleDesc$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VarHandle$VarHandleDesc$Kind;
    static values(): VarHandle$VarHandleDesc$Kind[];
    private constructor(arg2: DirectMethodHandleDesc)
    // private bootstrapMethod: DirectMethodHandleDesc;
    toBSMArgs(arg0: ClassDesc, arg1: ClassDesc): ConstantDesc[];
    name(): "FIELD" | "STATIC_FIELD" | "ARRAY";
}