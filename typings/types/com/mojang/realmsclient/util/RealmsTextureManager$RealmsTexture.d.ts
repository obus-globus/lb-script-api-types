import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RealmsTextureManager$RealmsTexture extends Record {
    constructor(image: string, textureId: Identifier)
    // private image: string;
    // private textureId: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    image(): string;
    textureId(): Identifier;
    toString(): string;
}