import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener.d.ts'
import type { ClassTweaker } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweaker.d.ts'
import type { ClassVisitor } from '../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { MethodNode } from '../../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class AccessWidenerClassVisitor extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor, arg2: ClassTweaker)
    // private accessWidener: AccessWidener;
    // private classAccess: number;
    // private className: string;
    // private classTweaker: ClassTweaker;
    // private recordDescriptor: StringBuilder;
    // private recordMethods: MethodNode[];
    // private shouldDeferRecordMethods: boolean;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitPermittedSubclass(arg0: string): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): RecordComponentVisitor;
}