import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureSlots$SlotContents } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$SlotContents.d.ts'
export class TextureSlots$Data extends Record {
    static EMPTY: TextureSlots$Data;
    constructor(values: JavaMap<string, TextureSlots$SlotContents>)
    // private values: JavaMap<string, TextureSlots$SlotContents>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    values(): JavaMap<string, TextureSlots$SlotContents>;
}