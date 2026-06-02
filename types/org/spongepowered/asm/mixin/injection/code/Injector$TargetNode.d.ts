import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
export class Injector$TargetNode extends Object {
    constructor(arg0: AbstractInsnNode)
    // private insn: AbstractInsnNode;
    readonly nominators: InjectionPoint[];
    equals(arg0: Object | null): boolean;
    getNode(): AbstractInsnNode;
    getNominators(): InjectionPoint[];
    hashCode(): number;
}