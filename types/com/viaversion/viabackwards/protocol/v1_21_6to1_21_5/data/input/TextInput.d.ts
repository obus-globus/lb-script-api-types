import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/Input.d.ts'
import type { TextInput$MultilineOptions } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/TextInput$MultilineOptions.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class TextInput extends Object implements Input {
    constructor(arg0: Map$Entry<string, Tag>[])
    // private initial: string;
    // private key: string;
    // private label: Tag;
    // private maxLength: number;
    // private options: TextInput$MultilineOptions[];
    readonly value: string;
    asCommandSubstitution(): string;
    asTag(): Tag;
    initial(): string;
    key(): string;
    label(): Tag;
    maxLength(): number;
    options(): TextInput$MultilineOptions[];
    setClampedValue(arg0: string): void;
    setValue(arg0: string): void;
    value(): string;
}