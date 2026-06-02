import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { Quantifier } from '../../../../../../../org/spongepowered/asm/util/Quantifier.d.ts'
import type { IAnnotationHandle } from '../../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export interface IResolvedDescriptor extends Object{
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