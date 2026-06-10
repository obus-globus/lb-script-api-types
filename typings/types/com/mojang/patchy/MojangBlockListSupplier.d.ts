import type { BlockListSupplier } from '../../../com/mojang/blocklist/BlockListSupplier.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MojangBlockListSupplier extends Object implements BlockListSupplier {
    constructor()
    createBlockList(): (param0: string) => boolean;
}