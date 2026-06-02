import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class ClassNodeAdapter extends Object {
    static getNestHostClass(paramarg0: ClassNode): string;
    static getNestMembers(paramarg0: ClassNode): string[];
    static getNestMembersAsList(paramarg0: ClassNode): string[];
    static setNestHostClass(paramarg0: ClassNode, paramarg1: string): void;
    static setNestMembers(paramarg0: ClassNode, paramarg1: string[]): void;
    private constructor()
}