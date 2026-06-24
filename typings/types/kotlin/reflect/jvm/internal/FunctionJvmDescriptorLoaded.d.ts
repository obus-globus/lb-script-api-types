import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FunctionJvmDescriptorLoaded extends Object {
    constructor(parameters: Class<Object>[], returnType: Class<Object> | null)
    readonly parameters: Class<Object>[];
    readonly returnType: Class<Object> | null;
}