import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { TextureSlots$SlotContents } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$SlotContents.d.ts'
export class TextureSlots$Value extends Record implements TextureSlots$SlotContents {
    private constructor(material: Material)
    // private material: Material;
    equals(o: Object | null): boolean;
    hashCode(): number;
    material(): Material;
    toString(): string;
}