import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { FontDescription } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/font/FontDescription.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AtlasSpriteFont extends Object implements FontDescription {
    constructor()
    constructor(arg0: Identifier, arg1: Identifier)
    readonly atlasId: Identifier;
    readonly spriteId: Identifier;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getAtlasId(): Identifier;
    getSpriteId(): Identifier;
    hashCode(): number;
    setAtlasId(arg0: Identifier): void;
    setSpriteId(arg0: Identifier): void;
    toString(): string;
}