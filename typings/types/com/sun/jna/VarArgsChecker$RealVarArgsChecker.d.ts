import type { VarArgsChecker } from '../../../com/sun/jna/VarArgsChecker.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
export class VarArgsChecker$RealVarArgsChecker extends VarArgsChecker {
    constructor(arg0: any)
    fixedArgs(arg0: Method): number;
    isVarArgs(arg0: Method): boolean;
}