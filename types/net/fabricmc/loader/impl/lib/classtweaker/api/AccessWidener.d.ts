import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener$Access } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener$Access.d.ts'
import type { EntryTriple } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/utils/EntryTriple.d.ts'
export interface AccessWidener extends Object{
    getCanonicalConstructorAccess(): AccessWidener$Access;
    getClassAccess(): AccessWidener$Access;
    getFieldAccess(arg0: EntryTriple): AccessWidener$Access;
    getMethodAccess(arg0: EntryTriple): AccessWidener$Access;
}