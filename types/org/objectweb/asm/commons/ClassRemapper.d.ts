import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class ClassRemapper extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor, arg2: Remapper)
    constructor(arg0: ClassVisitor, arg1: Remapper)
    // private className: string;
    // private remapper: Remapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    createFieldRemapper(arg0: FieldVisitor): FieldVisitor;
    createMethodRemapper(arg0: MethodVisitor): MethodVisitor;
    createModuleRemapper(arg0: ModuleVisitor): ModuleVisitor;
    createRecordComponentRemapper(arg0: RecordComponentVisitor): RecordComponentVisitor;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitModule(arg0: string, arg1: number, arg2: string): ModuleVisitor;
    visitNestHost(arg0: string): void;
    visitNestMember(arg0: string): void;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitPermittedSubclass(arg0: string): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): RecordComponentVisitor;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}