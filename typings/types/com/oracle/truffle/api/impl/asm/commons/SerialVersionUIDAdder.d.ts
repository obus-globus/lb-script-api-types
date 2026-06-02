import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SerialVersionUIDAdder extends ClassVisitor {
    constructor(classVisitor: ClassVisitor)
    constructor(api: number, classVisitor: ClassVisitor)
    // private access: number;
    // private computeSvuid: boolean;
    // private hasStaticInitializer: boolean;
    // private hasSvuid: boolean;
    // private interfaces: string[];
    // private name: string;
    // private svuidConstructors: E[];
    // private svuidFields: E[];
    // private svuidMethods: E[];
    addSVUID(svuid: number): void;
    computeSHAdigest(value: number[]): number[];
    computeSVUID(): number;
    hasSVUID(): boolean;
    visit(version: number, access: number, name: string, signature: string, superName: string, interfaces: string[]): void;
    visitEnd(): void;
    visitField(access: number, name: string, desc: string, signature: string, value: Object): FieldVisitor;
    visitInnerClass(innerClassName: string, outerName: string, innerName: string, innerClassAccess: number): void;
    visitMethod(access: number, name: string, descriptor: string, signature: string, exceptions: string[]): MethodVisitor;
}