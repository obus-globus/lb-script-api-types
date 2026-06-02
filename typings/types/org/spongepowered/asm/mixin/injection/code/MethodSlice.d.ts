import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { Slice } from '../../../../../../org/spongepowered/asm/mixin/injection/Slice.d.ts'
import type { ISliceContext } from '../../../../../../org/spongepowered/asm/mixin/injection/code/ISliceContext.d.ts'
export class MethodSlice extends Object {
    static parse(paramarg0: ISliceContext, paramarg1: AnnotationNode): MethodSlice;
    static parse(paramarg0: ISliceContext, paramarg1: Slice): MethodSlice;
    private constructor(arg0: ISliceContext, arg1: string, arg2: InjectionPoint, arg3: InjectionPoint)
    // private from: InjectionPoint;
    readonly id: string;
    // private name: string;
    // private owner: ISliceContext;
    // private successCountFrom: number;
    // private successCountTo: number;
    // private to: InjectionPoint;
    // private describe(): string;
    // private describe(arg0: string): string;
    // private find(arg0: AbstractInsnNode[], arg1: InjectionPoint, arg2: number, arg3: number, arg4: string): number;
    getId(): string;
    getSlice(arg0: AbstractInsnNode[]): (Object | null)[];
    postInject(): void;
    toString(): string;
}