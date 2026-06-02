import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/spongepowered/asm/lib/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/spongepowered/asm/lib/Attribute.d.ts'
import type { FieldVisitor } from '../../../../org/spongepowered/asm/lib/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../org/spongepowered/asm/lib/MethodVisitor.d.ts'
import type { TypePath } from '../../../../org/spongepowered/asm/lib/TypePath.d.ts'
export abstract class ClassVisitor extends Object {
    constructor()
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitSource(arg0: string, arg1: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}