import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AccessorGenerator } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorGenerator.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
export class AccessorGeneratorMethodProxy extends AccessorGenerator {
    constructor(arg0: AccessorInfo)
    constructor(arg0: AccessorInfo, arg1: boolean)
    // private argTypes: Type[];
    // private returnType: Type;
    // private targetMethod: MethodNode;
    generate(): MethodNode;
}