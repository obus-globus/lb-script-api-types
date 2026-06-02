import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener.d.ts'
import type { EnumExtension } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/EnumExtension.d.ts'
import type { InjectedInterface } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/InjectedInterface.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { ClassTweakerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/ClassTweakerVisitor.d.ts'
import type { ClassVisitor } from '../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export interface ClassTweaker extends Object, ClassTweakerVisitor{
    createClassVisitor(arg0: number, arg1: ClassVisitor, arg2: (param0: string, param1: number[]) => void): ClassVisitor;
    getAccessWidener(arg0: string): AccessWidener;
    getEnumExtensions(arg0: string): EnumExtension[];
    getInjectedInterfaces(arg0: string): InjectedInterface[];
    getTargets(): string[];
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitHeader(arg0: string): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
    visitLineNumber(arg0: number): void;
}