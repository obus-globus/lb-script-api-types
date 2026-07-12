import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CFunctionPointer } from '../../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { ComparableWord } from '../../../../org/graalvm/word/ComparableWord.d.ts'
export class CEntryPointLiteralCodePointer extends Object implements CFunctionPointer {
    constructor(definingClass: Class<Object>, methodName: string, ...parameterTypes: Class<Object>[])
    definingClass: Class<Object>;
    methodName: string;
    parameterTypes: Class<Object>[];
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}