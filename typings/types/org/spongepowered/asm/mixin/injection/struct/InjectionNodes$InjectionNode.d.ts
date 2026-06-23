import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class InjectionNodes$InjectionNode extends Object implements Comparable<InjectionNodes$InjectionNode> {
    constructor(arg0: AbstractInsnNode)
    readonly currentTarget: AbstractInsnNode;
    // private decorations: { [key: string]: Object };
    readonly id: number;
    readonly originalTarget: AbstractInsnNode;
    compareTo(arg0: InjectionNodes$InjectionNode): number;
    decorate<V extends unknown>(arg0: string, arg1: V): InjectionNodes$InjectionNode;
    getCurrentTarget(): AbstractInsnNode;
    getDecoration<V extends unknown>(arg0: string): V;
    getDecoration<V extends unknown>(arg0: string, arg1: V): V;
    getId(): number;
    getOriginalTarget(): AbstractInsnNode;
    hasDecoration(arg0: string): boolean;
    isRemoved(): boolean;
    isReplaced(): boolean;
    matches(arg0: AbstractInsnNode): boolean;
    remove(): InjectionNodes$InjectionNode;
    replace(arg0: AbstractInsnNode): InjectionNodes$InjectionNode;
    toString(): string;
}