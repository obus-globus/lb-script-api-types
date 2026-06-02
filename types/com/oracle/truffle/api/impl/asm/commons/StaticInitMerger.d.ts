import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
export class StaticInitMerger extends ClassVisitor {
    constructor(api: number, prefix: string, classVisitor: ClassVisitor)
    constructor(prefix: string, classVisitor: ClassVisitor)
    // private mergedClinitVisitor: MethodVisitor;
    // private numClinitMethods: number;
    // private owner: string;
    // private renamedClinitMethodPrefix: string;
    visit(version: number, access: number, name: string, signature: string, superName: string, interfaces: string[]): void;
    visitEnd(): void;
    visitMethod(access: number, name: string, descriptor: string, signature: string, exceptions: string[]): MethodVisitor;
}