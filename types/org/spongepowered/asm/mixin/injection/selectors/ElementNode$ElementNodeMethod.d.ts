import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ElementNode$NodeType } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode$NodeType.d.ts'
export class ElementNode$ElementNodeMethod extends ElementNode<MethodNode> {
    static dynamicInsnList(paramarg0: AbstractInsnNode[]): (Object | null)[];
    static fieldList(paramarg0: ClassNode): (Object | null)[];
    static insnList(paramarg0: AbstractInsnNode[]): (Object | null)[];
    static listOf(paramarg0: ClassNode, paramarg1: (Object | null)[]): (Object | null)[];
    static methodList(paramarg0: ClassNode): (Object | null)[];
    static of(paramarg0: Object | null): ElementNode<Object>;
    static of(paramarg0: ClassNode, paramarg1: Object | null): ElementNode<Object>;
    static of(paramarg0: ClassNode, paramarg1: FieldNode): ElementNode<FieldNode>;
    static of(paramarg0: ClassNode, paramarg1: MethodNode): ElementNode<MethodNode>;
    constructor(arg0: ClassNode, arg1: MethodNode)
    readonly method: MethodNode;
    readonly owner: ClassNode;
    equals(arg0: Object | null): boolean;
    get(): MethodNode;
    getDesc(): string;
    getMethod(): MethodNode;
    getName(): string;
    getOwner(): string;
    getSignature(): string;
    getType(): ElementNode$NodeType;
    hashCode(): number;
}