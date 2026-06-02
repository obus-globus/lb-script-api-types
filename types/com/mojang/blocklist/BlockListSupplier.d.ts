import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BlockListSupplier extends Object{
    createBlockList(): (param0: string) => kotlin.Boolean;
}