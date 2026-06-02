import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AccessorGeneratorField } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorGeneratorField.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
export class AccessorGeneratorFieldGetter extends AccessorGeneratorField {
    constructor(arg0: AccessorInfo)
    generate(): MethodNode;
}