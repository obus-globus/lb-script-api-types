import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { FieldInsnNode } from '../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassContext.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
export class EnumInfo extends Object implements Comparable<EnumInfo> {
    static forMixin(paramarg0: MixinTargetContext): EnumInfo;
    static forTarget(paramarg0: TargetClassContext): EnumInfo;
    private constructor(arg0: ClassContext, arg1: ClassContext, arg2: string)
    readonly clinit: MethodNode;
    readonly constantNames: string[];
    readonly constants: FieldNode[];
    // private description: string;
    // private enumClass: ClassContext;
    readonly selfTypedFields: FieldNode[];
    // private targetClass: ClassContext;
    // private tieBreakString: string;
    readonly valuesAssignment: FieldInsnNode;
    // private valuesField: FieldNode;
    compareTo(arg0: EnumInfo): number;
    // private findClinit(): MethodNode;
    // private findEnumConstants(): FieldNode[];
    // private findSelfTypedFields(): FieldNode[];
    // private findValuesAssignment(): FieldInsnNode;
    // private findValuesField(): FieldNode;
    getClinit(): MethodNode;
    getConstantNames(): string[];
    getConstants(): FieldNode[];
    getSelfTypedFields(): FieldNode[];
    getValuesAssignment(): FieldInsnNode;
    // private isAssignmentToOurStaticField(arg0: AbstractInsnNode, arg1: string, arg2: boolean): boolean;
    isEnumConstantAssignment(arg0: AbstractInsnNode): boolean;
}