import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ClassInfo } from '../../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
export class Target {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(paramarg0: ClassInfo, paramarg1: ClassNode, paramarg2: MethodNode): AbstractInsnNode[];
}