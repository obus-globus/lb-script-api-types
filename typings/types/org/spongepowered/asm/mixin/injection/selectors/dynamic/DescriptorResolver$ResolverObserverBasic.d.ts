import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DescriptorResolver$IResolverObserver } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/DescriptorResolver$IResolverObserver.d.ts'
export class DescriptorResolver$ResolverObserverBasic extends Object implements DescriptorResolver$IResolverObserver {
    constructor()
    readonly searched: string[];
    getSearched(): string[];
    postResolve(): void;
    visit(arg0: string, arg1: Object, arg2: string): void;
}