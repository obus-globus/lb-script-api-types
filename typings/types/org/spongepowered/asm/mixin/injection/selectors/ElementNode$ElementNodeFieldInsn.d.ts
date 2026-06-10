import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldInsnNode } from '../../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { FieldNode } from '../../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ElementNode$NodeType } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode$NodeType.d.ts'
export class ElementNode$ElementNodeFieldInsn extends ElementNode<FieldInsnNode> {
    static dynamicInsnList(paramarg0: AbstractInsnNode[]): ElementNode<AbstractInsnNode>[];
    static fieldList(paramarg0: ClassNode): ElementNode<FieldNode>[];
    static insnList(paramarg0: AbstractInsnNode[]): ElementNode<AbstractInsnNode>[];
    static listOf(paramarg0: ClassNode, paramarg1: (Object | null)[]): ElementNode<Object>[];
    static methodList(paramarg0: ClassNode): ElementNode<MethodNode>[];
    static of(paramarg0: AbstractInsnNode | null): ElementNode<AbstractInsnNode>;
    static of(paramarg0: ClassNode, paramarg1: Object | null): ElementNode<Object>;
    static of(paramarg0: ClassNode, paramarg1: FieldNode): ElementNode<FieldNode>;
    static of(paramarg0: ClassNode, paramarg1: MethodNode): ElementNode<MethodNode>;
    constructor(arg0: FieldInsnNode)
    readonly insn: FieldInsnNode;
    equals(arg0: Object | null): boolean;
    get(): FieldInsnNode;
    getDesc(): string;
    getInsn(): AbstractInsnNode;
    getName(): string;
    getOwner(): string;
    getSignature(): string;
    getType(): ElementNode$NodeType;
    hashCode(): number;
    isField(): boolean;
}