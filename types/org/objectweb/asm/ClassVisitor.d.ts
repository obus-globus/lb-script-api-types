import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { FieldVisitor } from '../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { ModuleVisitor } from '../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export abstract class ClassVisitor extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: ClassVisitor)
    // private api: number;
    // private cv: ClassVisitor;
    getDelegate(): ClassVisitor;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitModule(arg0: string, arg1: number, arg2: string): ModuleVisitor;
    visitNestHost(arg0: string): void;
    visitNestMember(arg0: string): void;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitPermittedSubclass(arg0: string): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): RecordComponentVisitor;
    visitSource(arg0: string, arg1: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}