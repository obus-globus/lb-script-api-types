import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SignatureBuildingComponents extends Object {
    static INSTANCE: SignatureBuildingComponents;
    private constructor()
    constructors(arg0: string[]): string[];
    // private escapeClassName(arg0: string): string;
    inClass(arg0: string, arg1: string[]): string[];
    inJavaLang(arg0: string, arg1: string[]): string[];
    inJavaUtil(arg0: string, arg1: string[]): string[];
    javaFunction(arg0: string): string;
    javaLang(arg0: string): string;
    javaUtil(arg0: string): string;
    javaUtilConcurrentAtomic(arg0: string): string;
    jvmDescriptor(arg0: string, arg1: string[], arg2: string): string;
    signature(arg0: string, arg1: string): string;
}