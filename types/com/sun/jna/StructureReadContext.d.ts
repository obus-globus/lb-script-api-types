import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { Structure } from '../../../com/sun/jna/Structure.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
export class StructureReadContext extends FromNativeContext {
    constructor(arg0: Structure, arg1: Field)
    readonly field: Field;
    readonly structure: Structure;
    getField(): Field;
    getStructure(): Structure;
}