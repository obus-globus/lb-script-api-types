import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { AnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AnnotationNode.d.ts'
import type { FieldNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/FieldNode.d.ts'
import type { InnerClassNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/InnerClassNode.d.ts'
import type { MethodNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/MethodNode.d.ts'
import type { ModuleNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/ModuleNode.d.ts'
import type { RecordComponentNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/RecordComponentNode.d.ts'
import type { TypeAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TypeAnnotationNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassNode extends ClassVisitor {
    constructor()
    constructor(api: number)
    access: number;
    attrs: Attribute[];
    fields: FieldNode[];
    innerClasses: InnerClassNode[];
    interfaces: string[];
    invisibleAnnotations: AnnotationNode[];
    invisibleTypeAnnotations: TypeAnnotationNode[];
    methods: MethodNode[];
    module: ModuleNode;
    name: string;
    nestHostClass: string;
    nestMembers: string[];
    outerClass: string;
    outerMethod: string;
    outerMethodDesc: string;
    permittedSubclasses: string[];
    recordComponents: RecordComponentNode[];
    signature: string;
    sourceDebug: string;
    sourceFile: string;
    superName: string;
    version: number;
    visibleAnnotations: AnnotationNode[];
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(classVisitor: ClassVisitor): void;
    check(api: number): void;
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
    visitSource(file: string, debug: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}