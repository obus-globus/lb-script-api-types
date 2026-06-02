import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
export interface ClassTweakerVisitor extends Object{
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitHeader(arg0: string): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
    visitLineNumber(arg0: number): void;
}