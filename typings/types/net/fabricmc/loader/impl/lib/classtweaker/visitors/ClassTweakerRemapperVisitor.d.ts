import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { ClassTweakerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/ClassTweakerVisitor.d.ts'
import type { Remapper } from '../../../../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class ClassTweakerRemapperVisitor extends Object implements ClassTweakerVisitor {
    constructor(arg0: ClassTweakerVisitor, arg1: Remapper, arg2: string, arg3: string)
    // private delegate: ClassTweakerVisitor;
    // private fromNamespace: string;
    // private remapper: Remapper;
    // private toNamespace: string;
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitHeader(arg0: string): void;
    visitHeader(arg0: string): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
    visitLineNumber(arg0: number): void;
}