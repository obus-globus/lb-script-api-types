import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureSlots$SlotContents } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$SlotContents.d.ts'
export class TextureSlots$Data extends Record {
    static EMPTY: TextureSlots$Data;
    constructor(values: { [key: string]: TextureSlots$SlotContents })
    // private values: { [key: string]: TextureSlots$SlotContents };
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    values(): { [key: string]: TextureSlots$SlotContents };
}