import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ElementNode$NodeType } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode$NodeType.d.ts'
export abstract class ElementNode<TNode extends Object | number | string | boolean> extends Object {
    static dynamicInsnList(paramarg0: AbstractInsnNode[]): (Object | null)[];
    static fieldList(paramarg0: ClassNode): (Object | null)[];
    static insnList(paramarg0: AbstractInsnNode[]): (Object | null)[];
    static listOf(paramarg0: ClassNode, paramarg1: (Object | null)[]): (Object | null)[];
    static methodList(paramarg0: ClassNode): (Object | null)[];
    static of(paramarg0: Object | null): ElementNode<Object>;
    static of(paramarg0: ClassNode, paramarg1: Object | null): ElementNode<Object>;
    static of(paramarg0: ClassNode, paramarg1: FieldNode): ElementNode<FieldNode>;
    static of(paramarg0: ClassNode, paramarg1: MethodNode): ElementNode<MethodNode>;
    constructor()
    get(): TNode;
    getDelegateDesc(): string;
    getDesc(): string;
    getField(): FieldNode;
    getImplDesc(): string;
    getInsn(): AbstractInsnNode;
    getMethod(): MethodNode;
    getName(): string;
    getOwner(): string;
    getSignature(): string;
    getSyntheticName(): string;
    getType(): ElementNode$NodeType;
    isField(): boolean;
    toString(): string;
}