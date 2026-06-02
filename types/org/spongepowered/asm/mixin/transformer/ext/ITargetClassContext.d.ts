import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassInfo } from '../../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
export interface ITargetClassContext extends Object{
    getClassInfo(): ClassInfo;
    getClassNode(): ClassNode;
}