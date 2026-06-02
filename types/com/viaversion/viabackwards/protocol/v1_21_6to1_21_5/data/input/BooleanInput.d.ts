import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/Input.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class BooleanInput extends Object implements Input {
    constructor(arg0: Map$Entry<string, Tag>[])
    // private initial: boolean;
    // private key: string;
    // private label: Tag;
    // private onFalse: string;
    // private onTrue: string;
    readonly value: boolean;
    asCommandSubstitution(): string;
    asTag(): Tag;
    initial(): boolean;
    key(): string;
    label(): Tag;
    onFalse(): string;
    onTrue(): string;
    setValue(arg0: boolean): void;
    value(): boolean;
}