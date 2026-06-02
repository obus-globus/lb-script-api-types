import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { ISliceContext } from '../../../../../../org/spongepowered/asm/mixin/injection/code/ISliceContext.d.ts'
import type { TargetSelectors$SelectedMethod } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/TargetSelectors$SelectedMethod.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class InjectorTarget extends Object {
    constructor(arg0: ISliceContext, arg1: AbstractInsnNode[], arg2: TargetSelectors$SelectedMethod)
    // private cache: { [key: string]: (Object | null)[] };
    // private context: ISliceContext;
    readonly mergedBy: string;
    readonly mergedPriority: number;
    readonly selectedMethod: TargetSelectors$SelectedMethod;
    readonly target: AbstractInsnNode[];
    addInjectionNode(arg0: AbstractInsnNode): InjectionNodes$InjectionNode;
    dispose(): void;
    getDesc(): string;
    getInjectionNode(arg0: AbstractInsnNode): InjectionNodes$InjectionNode;
    getMergedBy(): string;
    getMergedPriority(): number;
    getMethod(): MethodNode;
    getName(): string;
    getSelectedMethod(): TargetSelectors$SelectedMethod;
    getSignature(): string;
    getSlice(arg0: string): AbstractInsnNode[];
    getSlice(arg0: InjectionPoint): AbstractInsnNode[];
    getTarget(): AbstractInsnNode[];
    isMerged(): boolean;
    toString(): string;
}