import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleProvideNode extends Object {
    constructor(service: string, providers: string[])
    providers: string[];
    service: string;
    accept(moduleVisitor: ModuleVisitor): void;
}