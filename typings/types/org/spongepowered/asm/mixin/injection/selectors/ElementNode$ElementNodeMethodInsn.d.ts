import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodInsnNode } from '../../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ElementNode$NodeType } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode$NodeType.d.ts'
export class ElementNode$ElementNodeMethodInsn extends ElementNode<MethodInsnNode> {
    static dynamicInsnList(paramarg0: AbstractInsnNode[]): ElementNode<AbstractInsnNode>[];
    static fieldList(paramarg0: ClassNode): ElementNode<FieldNode>[];
    static insnList(paramarg0: AbstractInsnNode[]): ElementNode<AbstractInsnNode>[];
    static listOf<TNode extends unknown>(paramarg0: ClassNode, paramarg1: TNode[]): ElementNode<TNode>[];
    static methodList(paramarg0: ClassNode): ElementNode<MethodNode>[];
    static of<TNode extends AbstractInsnNode>(paramarg0: TNode): ElementNode<TNode>;
    static of<TNode extends unknown>(paramarg0: ClassNode, paramarg1: TNode): ElementNode<TNode>;
    static of(paramarg0: ClassNode, paramarg1: FieldNode): ElementNode<FieldNode>;
    static of(paramarg0: ClassNode, paramarg1: MethodNode): ElementNode<MethodNode>;
    constructor(arg0: MethodInsnNode)
    readonly insn: MethodInsnNode;
    equals(arg0: Object | null): boolean;
    get(): MethodInsnNode;
    getDesc(): string;
    getInsn(): AbstractInsnNode;
    getName(): string;
    getOwner(): string;
    getSignature(): string;
    getType(): ElementNode$NodeType;
    hashCode(): number;
}