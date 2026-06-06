import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/Input.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class NumberRangeInput extends Object implements Input {
    constructor(arg0: Map$Entry<string, Tag>[])
    // private end: number;
    // private initial: number;
    // private key: string;
    // private label: Tag;
    // private labelFormat: string;
    // private start: number;
    // private step: number;
    asCommandSubstitution(): string;
    asTag(): Tag;
    displayName(): Tag;
    end(): number;
    initial(): number;
    key(): string;
    label(): Tag;
    labelFormat(): string;
    setClampedValue(arg0: number): void;
    setValue(arg0: number): void;
    start(): number;
    step(): number;
    value(): number;
    valueAsString(): string;
}