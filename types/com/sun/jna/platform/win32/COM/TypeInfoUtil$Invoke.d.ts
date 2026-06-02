import type { OaIdl$EXCEPINFO$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO$ByReference.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeInfoUtil$Invoke extends Object {
    constructor(arg0: Variant$VARIANT$ByReference, arg1: OaIdl$EXCEPINFO$ByReference, arg2: number)
    readonly pExcepInfo: OaIdl$EXCEPINFO$ByReference;
    readonly pVarResult: Variant$VARIANT$ByReference;
    readonly puArgErr: number;
    getPuArgErr(): number;
    getpExcepInfo(): OaIdl$EXCEPINFO$ByReference;
    getpVarResult(): Variant$VARIANT$ByReference;
}