import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureSlots$SlotContents } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$SlotContents.d.ts'
export class TextureSlots$Reference extends Record implements TextureSlots$SlotContents {
    private constructor(target: string)
    // private target: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    target(): string;
    toString(): string;
}