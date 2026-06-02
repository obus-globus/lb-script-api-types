import type { Structure } from '../../../com/sun/jna/Structure.d.ts'
import type { ToNativeContext } from '../../../com/sun/jna/ToNativeContext.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
export class StructureWriteContext extends ToNativeContext {
    constructor(arg0: Structure, arg1: Field)
    readonly field: Field;
    // private struct: Structure;
    getField(): Field;
    getStructure(): Structure;
}