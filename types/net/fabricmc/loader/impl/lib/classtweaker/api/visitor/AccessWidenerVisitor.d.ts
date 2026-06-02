import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AccessWidenerVisitor$AccessType } from '../../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor$AccessType.d.ts'
export interface AccessWidenerVisitor extends Object{
    visitClass(arg0: AccessWidenerVisitor$AccessType, arg1: boolean): void;
    visitField(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
    visitMethod(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
}