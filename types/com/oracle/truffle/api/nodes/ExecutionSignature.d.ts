import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExecutionSignature extends Object {
    static GENERIC: ExecutionSignature;
    static create(paramreturnType: Class<Object>, paramargumentTypes: Object | null): ExecutionSignature;
    constructor(returnType: Class<Object>, argumentTypes: Class<Object>[])
    readonly argumentTypes: Class<Object>[];
    readonly returnType: Class<Object>;
    getArgumentTypes(): Class<Object>[];
    getReturnType(): Class<Object>;
}