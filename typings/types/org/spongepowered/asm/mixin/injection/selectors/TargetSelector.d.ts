import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelectorDynamic } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorDynamic.d.ts'
import type { TargetSelector$Result } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/TargetSelector$Result.d.ts'
import type { IAnnotationHandle } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class TargetSelector extends Object {
    static parse(paramarg0: Object[], paramarg1: ISelectorContext): ITargetSelector[];
    static parse(paramarg0: Object[], paramarg1: ISelectorContext, paramarg2: ITargetSelector[]): ITargetSelector[];
    static parse(paramarg0: string, paramarg1: ISelectorContext): ITargetSelector;
    static parse(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): ITargetSelector;
    static parseAndValidate(paramarg0: Object[], paramarg1: ISelectorContext): ITargetSelector[];
    static parseAndValidate(paramarg0: string, paramarg1: ISelectorContext): ITargetSelector;
    static parseAndValidate(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): ITargetSelector;
    static parseName(paramarg0: string, paramarg1: ISelectorContext): string;
    static register(paramarg0: Class<ITargetSelectorDynamic>, paramarg1: string): void;
    static run<TNode extends unknown>(paramarg0: ITargetSelector[], paramarg1: ElementNode<TNode>[]): TargetSelector$Result<TNode>;
    static run<TNode extends unknown>(paramarg0: ITargetSelector, paramarg1: ElementNode<TNode>[]): TargetSelector$Result<TNode>;
    private constructor()
}