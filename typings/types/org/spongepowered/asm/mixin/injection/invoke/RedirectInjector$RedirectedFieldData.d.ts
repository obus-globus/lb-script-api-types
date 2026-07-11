import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { FieldInsnNode } from '../../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { Injector$InjectorData } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector$InjectorData.d.ts'
export class RedirectInjector$RedirectedFieldData extends Injector$InjectorData {
    constructor(arg0: AbstractInsnNode[], arg1: FieldInsnNode)
    // private dimensions: number;
    // private elementType: Type;
    // private extraDimensions: number;
    // private isGetter: boolean;
    // private isSetter: boolean;
    // private isStatic: boolean;
    // private node: FieldInsnNode;
    // private opcode: number;
    // private owner: Type;
    // private type: Type;
    getArrayArgs(...arg0: Type[]): Type[];
    getTotalDimensions(): number;
}