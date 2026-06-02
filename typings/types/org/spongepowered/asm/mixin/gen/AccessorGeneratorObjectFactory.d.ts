import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AccessorGeneratorMethodProxy } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorGeneratorMethodProxy.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
export class AccessorGeneratorObjectFactory extends AccessorGeneratorMethodProxy {
    constructor(arg0: AccessorInfo)
    generate(): MethodNode;
}