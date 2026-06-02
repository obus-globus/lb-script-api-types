import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleRequireNode extends Object {
    constructor(module: string, access: number, version: string)
    access: number;
    module: string;
    version: string;
    accept(moduleVisitor: ModuleVisitor): void;
}