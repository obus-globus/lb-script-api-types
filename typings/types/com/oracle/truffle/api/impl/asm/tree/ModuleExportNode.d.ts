import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleExportNode extends Object {
    constructor(packaze: string, access: number, modules: string[])
    access: number;
    modules: string[];
    packaze: string;
    accept(moduleVisitor: ModuleVisitor): void;
}