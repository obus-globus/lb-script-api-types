import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { ClassTweakerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/ClassTweakerVisitor.d.ts'
export interface ClassTweakerWriter extends Object, ClassTweakerVisitor{
    getOutput(): number[];
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitHeader(arg0: string): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
    visitLineNumber(arg0: number): void;
}