import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class VarArgsChecker extends Object {
    constructor(arg0: any)
    fixedArgs(arg0: Method): number;
    isVarArgs(arg0: Method): boolean;
}