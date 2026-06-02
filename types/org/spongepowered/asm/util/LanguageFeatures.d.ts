import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class LanguageFeatures extends Object {
    static DYNAMIC_CONSTANTS: number;
    static METHODS_IN_INTERFACES: number;
    static NESTING: number;
    static PRIVATE_METHODS_IN_INTERFACES: number;
    static PRIVATE_SYNTHETIC_METHODS_IN_INTERFACES: number;
    static RECORDS: number;
    static SEALED_CLASSES: number;
    static format(paramarg0: number): string;
    static scan(paramarg0: ClassNode): number;
    private constructor()
}