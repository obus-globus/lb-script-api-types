import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { ModuleExportNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/ModuleExportNode.d.ts'
import type { ModuleOpenNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/ModuleOpenNode.d.ts'
import type { ModuleProvideNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/ModuleProvideNode.d.ts'
import type { ModuleRequireNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/ModuleRequireNode.d.ts'
export class ModuleNode extends ModuleVisitor {
    constructor(api: number, name: string, access: number, version: string, requires: ModuleRequireNode[], exports: ModuleExportNode[], opens: ModuleOpenNode[], uses: string[], provides: ModuleProvideNode[])
    constructor(name: string, access: number, version: string)
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
    accept(classVisitor: ClassVisitor): void;
    visitEnd(): void;
    visitExport(packaze: string, access: number, ...modules: string[]): void;
    visitMainClass(mainClass: string): void;
    visitOpen(packaze: string, access: number, ...modules: string[]): void;
    visitPackage(packaze: string): void;
    visitProvide(service: string, ...providers: string[]): void;
    visitRequire(module: string, access: number, version: string): void;
    visitUse(service: string): void;
}