import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
export class ModuleProvideNode extends Object {
    constructor(arg0: string, arg1: string[])
    providers: string[];
    service: string;
    accept(arg0: ModuleVisitor): void;
}