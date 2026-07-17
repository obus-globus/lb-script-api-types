import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener.d.ts'
import type { AccessWidener$Access } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener$Access.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { AccessWidenerVisitor$AccessType } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor$AccessType.d.ts'
import type { AccessWidenerImpl$MutableAccess } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/AccessWidenerImpl$MutableAccess.d.ts'
import type { EntryTriple } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/utils/EntryTriple.d.ts'
export class AccessWidenerImpl extends Object implements AccessWidener, AccessWidenerVisitor {
    constructor(arg0: string)
    classAccess: AccessWidenerImpl$MutableAccess;
    // private fieldAccess: JavaMap<EntryTriple, AccessWidenerImpl$MutableAccess>;
    // private methodAccess: JavaMap<EntryTriple, AccessWidenerImpl$MutableAccess>;
    // private owner: string;
    addOrMerge(arg0: JavaMap<EntryTriple, AccessWidenerImpl$MutableAccess>, arg1: EntryTriple, arg2: AccessWidenerVisitor$AccessType, arg3: AccessWidenerImpl$MutableAccess): void;
    applyAccess(arg0: AccessWidenerVisitor$AccessType, arg1: AccessWidenerImpl$MutableAccess, arg2: EntryTriple): AccessWidenerImpl$MutableAccess;
    getCanonicalConstructorAccess(): AccessWidener$Access;
    getClassAccess(): AccessWidenerImpl$MutableAccess;
    getFieldAccess(arg0: EntryTriple): AccessWidener$Access;
    getMethodAccess(arg0: EntryTriple): AccessWidener$Access;
    // private makeClassAccessible(arg0: EntryTriple): void;
    // private makeClassExtendable(arg0: EntryTriple): void;
    visitClass(arg0: AccessWidenerVisitor$AccessType, arg1: boolean): void;
    visitField(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
    visitMethod(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
}