import type { VarArgsChecker$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { VarArgsChecker } from '../../../com/sun/jna/VarArgsChecker.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
export class VarArgsChecker$NoVarArgsChecker extends VarArgsChecker {
    private constructor()
    constructor(arg0: VarArgsChecker$1)
    fixedArgs(arg0: Method): number;
    isVarArgs(arg0: Method): boolean;
}