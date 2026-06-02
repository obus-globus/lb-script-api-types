import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FromLibGraalId extends Object{
    getMethodName(): string;
    getName(): string;
    getParameterTypes(): Class<Object>[];
    getReturnType(): Class<Object>;
    getSignature(): string;
}