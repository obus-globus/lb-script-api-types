import type { ClassDesc } from '../../java/lang/constant/ClassDesc.d.ts'
import type { ConstantDesc } from '../../java/lang/constant/ConstantDesc.d.ts'
import type { DirectMethodHandleDesc } from '../../java/lang/constant/DirectMethodHandleDesc.d.ts'
import type { DynamicConstantDesc } from '../../java/lang/constant/DynamicConstantDesc.d.ts'
import type { MethodHandles$Lookup } from '../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Enum$EnumDesc<E extends Enum<E>> extends DynamicConstantDesc<E> {
    static of(paramarg0: ClassDesc, paramarg1: string): Enum$EnumDesc<any>;
    static of(paramarg0: DirectMethodHandleDesc): DynamicConstantDesc<Object>;
    static of(paramarg0: DirectMethodHandleDesc, paramarg1: (Object | null)[]): DynamicConstantDesc<Object>;
    static ofCanonical(paramarg0: DirectMethodHandleDesc, paramarg1: string, paramarg2: ClassDesc, paramarg3: (Object | null)[]): ConstantDesc;
    static ofNamed(paramarg0: DirectMethodHandleDesc, paramarg1: string, paramarg2: ClassDesc, paramarg3: (Object | null)[]): DynamicConstantDesc<Object>;
    private constructor(arg0: ClassDesc, arg1: string)
    resolveConstantDesc(arg0: MethodHandles$Lookup): E;
    toString(): string;
}