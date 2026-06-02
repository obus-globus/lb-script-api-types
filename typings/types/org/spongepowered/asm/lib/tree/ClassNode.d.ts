import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassVisitor } from '../../../../../org/spongepowered/asm/lib/ClassVisitor.d.ts'
export class ClassNode extends ClassVisitor {
    constructor(arg0: ClassNode)
    access: number;
    interfaces: string[];
    name: string;
    outerClass: string;
    outerMethod: string;
    outerMethodDesc: string;
    signature: string;
    sourceDebug: string;
    sourceFile: string;
    superName: string;
    version: number;
    accept(arg0: ClassVisitor): void;
    check(arg0: number): void;
}