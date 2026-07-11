import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { ModuleExportNode } from '../../../../org/objectweb/asm/tree/ModuleExportNode.d.ts'
import type { ModuleOpenNode } from '../../../../org/objectweb/asm/tree/ModuleOpenNode.d.ts'
import type { ModuleProvideNode } from '../../../../org/objectweb/asm/tree/ModuleProvideNode.d.ts'
import type { ModuleRequireNode } from '../../../../org/objectweb/asm/tree/ModuleRequireNode.d.ts'
export class ModuleNode extends ModuleVisitor {
    constructor(arg0: number, arg1: string, arg2: number, arg3: string, arg4: ModuleRequireNode[], arg5: ModuleExportNode[], arg6: ModuleOpenNode[], arg7: string[], arg8: ModuleProvideNode[])
    constructor(arg0: string, arg1: number, arg2: string)
    access: number;
    exports: ModuleExportNode[];
    mainClass: string;
    name: string;
    opens: ModuleOpenNode[];
    packages: string[];
    provides: ModuleProvideNode[];
    requires: ModuleRequireNode[];
    uses: string[];
    version: string;
    accept(arg0: ClassVisitor): void;
    visitEnd(): void;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    visitMainClass(arg0: string): void;
    visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
    visitPackage(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitUse(arg0: string): void;
}