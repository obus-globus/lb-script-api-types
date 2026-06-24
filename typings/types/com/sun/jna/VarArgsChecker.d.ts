import type { VarArgsChecker$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class VarArgsChecker extends Object {
    private constructor()
    constructor(arg0: VarArgsChecker$1)
    fixedArgs(arg0: Method): number;
    isVarArgs(arg0: Method): boolean;
}