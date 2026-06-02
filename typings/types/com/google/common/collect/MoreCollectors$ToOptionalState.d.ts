import type { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreCollectors$ToOptionalState extends Object {
    constructor()
    // private element: Object;
    // private extras: Object[];
    add(o: Object): void;
    combine(other: MoreCollectors$ToOptionalState): MoreCollectors$ToOptionalState;
    getElement(): Object;
    getOptional(): Optional<Object>;
    multiples(overflow: boolean): IllegalArgumentException;
}