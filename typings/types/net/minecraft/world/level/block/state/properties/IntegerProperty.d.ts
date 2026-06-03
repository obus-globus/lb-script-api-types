import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class IntegerProperty extends Property<number> {
    static create(paramname: string, parammin: number, parammax: number): IntegerProperty;
    private constructor(name: string, min: number, max: number)
    // private max: number;
    // private min: number;
    // private values: (Object | null)[];
    equals(o: Object | null): boolean;
    generateHashCode(): number;
    getInternalIndex(value: number): number;
    getName(): string;
    getName(value: number): string;
    getPossibleValues(): number[];
    getValue(name: string): Optional<number>;
}