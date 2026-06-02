import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
export abstract class AccessorGenerator extends Object {
    constructor(arg0: AccessorInfo, arg1: boolean)
    // private info: AccessorInfo;
    // private targetIsInterface: boolean;
    // private targetIsStatic: boolean;
    checkModifiers(): void;
    createMethod(arg0: number, arg1: number): MethodNode;
    generate(): MethodNode;
    validate(): void;
}