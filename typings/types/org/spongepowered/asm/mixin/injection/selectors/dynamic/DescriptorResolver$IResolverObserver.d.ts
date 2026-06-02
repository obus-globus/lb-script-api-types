import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DescriptorResolver$IResolverObserver extends Object{
    getSearched(): string[];
    postResolve(): void;
    visit(arg0: string, arg1: Object, arg2: string): void;
}