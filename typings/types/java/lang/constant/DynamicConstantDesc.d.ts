import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { DirectMethodHandleDesc } from '../../../java/lang/constant/DirectMethodHandleDesc.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DynamicConstantDesc<T extends unknown> extends Object implements ConstantDesc {
    static of(paramarg0: DirectMethodHandleDesc): DynamicConstantDesc<Object>;
    static of(paramarg0: DirectMethodHandleDesc, ...paramarg1: (Object | null)[]): DynamicConstantDesc<Object>;
    static ofCanonical(paramarg0: DirectMethodHandleDesc, paramarg1: string, paramarg2: ClassDesc, paramarg3: (Object | null)[]): ConstantDesc;
    static ofNamed(paramarg0: DirectMethodHandleDesc, paramarg1: string, paramarg2: ClassDesc, ...paramarg3: (Object | null)[]): DynamicConstantDesc<Object>;
    constructor(arg0: DirectMethodHandleDesc, arg1: string, arg2: ClassDesc, ...arg3: ConstantDesc[])
    // private bootstrapArgs: ConstantDesc[];
    // private bootstrapMethod: DirectMethodHandleDesc;
    // private constantName: string;
    // private constantType: ClassDesc;
    bootstrapArgs(): ConstantDesc[];
    bootstrapArgsList(): ConstantDesc[];
    bootstrapMethod(): DirectMethodHandleDesc;
    constantName(): string;
    constantType(): ClassDesc;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    resolveConstantDesc(arg0: MethodHandles$Lookup): T;
    toString(): string;
    // private tryCanonicalize(): ConstantDesc;
}