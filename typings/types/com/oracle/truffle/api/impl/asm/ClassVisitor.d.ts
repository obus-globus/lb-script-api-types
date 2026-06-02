import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { FieldVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { ModuleVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ClassVisitor extends Object {
    constructor(api: number)
    constructor(api: number, classVisitor: ClassVisitor)
    // private api: number;
    // private cv: ClassVisitor;
    getDelegate(): ClassVisitor;
    visit(version: number, access: number, name: string, signature: string, superName: string, interfaces: string[]): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitEnd(): void;
    visitField(access: number, name: string, descriptor: string, signature: string, value: Object): FieldVisitor;
    visitInnerClass(name: string, outerName: string, innerName: string, access: number): void;
    visitMethod(access: number, name: string, descriptor: string, signature: string, exceptions: string[]): MethodVisitor;
    visitModule(name: string, access: number, version: string): ModuleVisitor;
    visitNestHost(nestHost: string): void;
    visitNestMember(nestMember: string): void;
    visitOuterClass(owner: string, name: string, descriptor: string): void;
    visitPermittedSubclass(permittedSubclass: string): void;
    visitRecordComponent(name: string, descriptor: string, signature: string): RecordComponentVisitor;
    visitSource(source: string, debug: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}