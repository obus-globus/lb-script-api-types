import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
export class ModuleOpenNode extends Object {
    constructor(arg0: string, arg1: number, arg2: string[])
    access: number;
    modules: string[];
    packaze: string;
    accept(arg0: ModuleVisitor): void;
}