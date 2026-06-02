import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { DescriptorResolver$ResolverObserverBasic } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/DescriptorResolver$ResolverObserverBasic.d.ts'
import type { PrettyPrinter } from '../../../../../../../org/spongepowered/asm/util/PrettyPrinter.d.ts'
export class DescriptorResolver$ResolverObserverDebug extends DescriptorResolver$ResolverObserverBasic {
    constructor(arg0: ISelectorContext)
    // private printer: PrettyPrinter;
    postResolve(): void;
    visit(arg0: string, arg1: Object, arg2: string): void;
}