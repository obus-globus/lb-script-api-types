import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { SerialVersionUIDAdder$Item } from '../../../../org/objectweb/asm/commons/SerialVersionUIDAdder$Item.d.ts'
export class SerialVersionUIDAdder extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor)
    constructor(arg0: ClassVisitor)
    // private access: number;
    // private computeSvuid: boolean;
    // private hasStaticInitializer: boolean;
    // private hasSvuid: boolean;
    // private interfaces: string[];
    // private name: string;
    // private svuidConstructors: SerialVersionUIDAdder$Item[];
    // private svuidFields: SerialVersionUIDAdder$Item[];
    // private svuidMethods: SerialVersionUIDAdder$Item[];
    addSVUID(arg0: number): void;
    computeSHAdigest(arg0: number[]): number[];
    computeSVUID(): number;
    hasSVUID(): boolean;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}