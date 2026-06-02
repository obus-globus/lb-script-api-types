import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { AccessWidenerVisitor$AccessType } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor$AccessType.d.ts'
import type { Remapper } from '../../../../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class AccessWidenerRemapperVisitor extends Object implements AccessWidenerVisitor {
    constructor(arg0: AccessWidenerVisitor, arg1: Remapper, arg2: string)
    // private delegate: AccessWidenerVisitor;
    // private owner: string;
    // private remapper: Remapper;
    visitClass(arg0: AccessWidenerVisitor$AccessType, arg1: boolean): void;
    visitClass(arg0: AccessWidenerVisitor$AccessType, arg1: boolean): void;
    visitField(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
    visitField(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
    visitMethod(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
    visitMethod(arg0: string, arg1: string, arg2: AccessWidenerVisitor$AccessType, arg3: boolean): void;
}