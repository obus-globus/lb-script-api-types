import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiType } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class SinglePointOfInterestTypeFilter extends Record implements Predicate<Holder<PoiType>> {
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor(type: Holder<PoiType>)
    and(arg0: (param0: Holder<PoiType>) => boolean): (param0: Holder<PoiType>) => boolean;
    equals(arg0: Object | null): boolean;
    getType(): Holder<PoiType>;
    hashCode(): number;
    negate(): (param0: Holder<PoiType>) => boolean;
    or(arg0: (param0: Holder<PoiType>) => boolean): (param0: Holder<PoiType>) => boolean;
    test(arg0: Holder<PoiType>): boolean;
    toString(): string;
    type(): Holder<PoiType>;
}