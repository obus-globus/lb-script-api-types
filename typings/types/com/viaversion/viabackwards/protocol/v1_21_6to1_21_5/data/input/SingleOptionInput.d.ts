import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/Input.d.ts'
import type { SingleOptionInput$Entry } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/SingleOptionInput$Entry.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class SingleOptionInput extends Object implements Input {
    constructor(arg0: Map$Entry<string, Tag>[])
    // private key: string;
    // private label: Tag;
    // private options: SingleOptionInput$Entry[];
    asCommandSubstitution(): string;
    asTag(): Tag;
    key(): string;
    label(): Tag;
    options(): SingleOptionInput$Entry[];
    setClampedValue(arg0: number): void;
    setValue(arg0: number): void;
    value(): number;
}