import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { ClassVisitor } from '../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class EnvironmentStrippingData extends ClassVisitor {
    constructor(arg0: number, arg1: string)
    // private envType: string;
    // private stripEntireClass: boolean;
    readonly stripFields: E[];
    readonly stripInterfaces: E[];
    readonly stripMethods: E[];
    getStripFields(): E[];
    getStripInterfaces(): E[];
    getStripMethods(): E[];
    isEmpty(): boolean;
    stripEntireClass(): boolean;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    // private visitMemberAnnotation(arg0: string, arg1: boolean, arg2: () => void): AnnotationVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}