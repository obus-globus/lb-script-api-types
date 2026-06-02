import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassRemapper extends ClassVisitor {
    constructor(classVisitor: ClassVisitor, remapper: Remapper)
    constructor(api: number, classVisitor: ClassVisitor, remapper: Remapper)
    // private className: string;
    // private remapper: Remapper;
    createAnnotationRemapper(annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(descriptor: string, annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    createFieldRemapper(fieldVisitor: FieldVisitor): FieldVisitor;
    createMethodRemapper(methodVisitor: MethodVisitor): MethodVisitor;
    createModuleRemapper(moduleVisitor: ModuleVisitor): ModuleVisitor;
    createRecordComponentRemapper(recordComponentVisitor: RecordComponentVisitor): RecordComponentVisitor;
    visit(version: number, access: number, name: string, signature: string, superName: string, interfaces: string[]): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitField(access: number, name: string, descriptor: string, signature: string, value: Object): FieldVisitor;
    visitInnerClass(name: string, outerName: string, innerName: string, access: number): void;
    visitMethod(access: number, name: string, descriptor: string, signature: string, exceptions: string[]): MethodVisitor;
    visitModule(name: string, flags: number, version: string): ModuleVisitor;
    visitNestHost(nestHost: string): void;
    visitNestMember(nestMember: string): void;
    visitOuterClass(owner: string, name: string, descriptor: string): void;
    visitPermittedSubclass(permittedSubclass: string): void;
    visitRecordComponent(name: string, descriptor: string, signature: string): RecordComponentVisitor;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}