import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener.d.ts'
import type { ClassTweaker } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweaker.d.ts'
import type { EnumExtension } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/EnumExtension.d.ts'
import type { InjectedInterface } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/InjectedInterface.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { AccessWidenerImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/AccessWidenerImpl.d.ts'
import type { EnumExtensionImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/EnumExtensionImpl.d.ts'
import type { InjectedInterfaceImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/InjectedInterfaceImpl.d.ts'
import type { ClassVisitor } from '../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export class ClassTweakerImpl extends Object implements ClassTweaker {
    constructor()
    // private accessWideners: { [key: string]: AccessWidenerImpl };
    // private classes: string[];
    // private enumExtensions: { [key: string]: EnumExtensionImpl[] };
    // private injectedInterfaces: { [key: string]: InjectedInterfaceImpl[] };
    // private namespace: string;
    // private targetClasses: string[];
    // private addTargets(arg0: string): void;
    createClassVisitor(arg0: number, arg1: ClassVisitor, arg2: (param0: string, param1: number[]) => void): ClassVisitor;
    getAccessWidener(arg0: string): AccessWidener;
    getEnumExtensions(arg0: string): EnumExtension[];
    getInjectedInterfaces(arg0: string): InjectedInterface[];
    getTargets(): string[];
    hashCode(): number;
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitHeader(arg0: string): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
}