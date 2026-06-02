import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class Injector$InjectorData extends Object {
    constructor(arg0: AbstractInsnNode[])
    constructor(arg0: AbstractInsnNode[], arg1: string)
    constructor(arg0: AbstractInsnNode[], arg1: string, arg2: boolean)
    allowCoerceArgs: boolean;
    captureTargetArgs: number;
    coerceReturnType: boolean;
    description: string;
    target: AbstractInsnNode[];
    toString(): string;
}