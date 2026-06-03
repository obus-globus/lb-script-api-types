import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BooleanProperty extends Property<boolean> {
    static create(paramname: string): BooleanProperty;
    private constructor(name: string)
    getInternalIndex(value: boolean): number;
    getName(): string;
    getName(value: boolean): string;
    getPossibleValues(): boolean[];
    getValue(name: string): Optional<boolean>;
}