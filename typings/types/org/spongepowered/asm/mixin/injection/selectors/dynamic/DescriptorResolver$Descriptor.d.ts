import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { ISelectorContext } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IResolvedDescriptor } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/IResolvedDescriptor.d.ts'
import type { Quantifier } from '../../../../../../../org/spongepowered/asm/util/Quantifier.d.ts'
import type { IAnnotationHandle } from '../../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class DescriptorResolver$Descriptor extends Object implements IResolvedDescriptor {
    constructor(arg0: string[], arg1: IAnnotationHandle, arg2: ISelectorContext)
    constructor(arg0: string[], arg1: IAnnotationHandle, arg2: ISelectorContext, arg3: boolean)
    // private context: ISelectorContext;
    readonly debug: boolean;
    // private desc: IAnnotationHandle;
    // private searched: string[];
    getAnnotation(): IAnnotationHandle;
    getArgs(): Type[];
    getId(): string;
    getMatches(): Quantifier;
    getName(): string;
    getNext(): IAnnotationHandle[];
    getOwner(): Type;
    getResolutionInfo(): string;
    getReturnType(): Type;
    isDebug(): boolean;
    isResolved(): boolean;
}