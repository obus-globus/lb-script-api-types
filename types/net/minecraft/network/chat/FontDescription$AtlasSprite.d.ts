import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FontDescription } from '../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { FontDescription$Resource } from '../../../../net/minecraft/network/chat/FontDescription$Resource.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class FontDescription$AtlasSprite extends Record implements FontDescription {
    static CODEC: Codec<FontDescription>;
    static DEFAULT: FontDescription$Resource;
    constructor(atlasId: Identifier, spriteId: Identifier)
    // private atlasId: Identifier;
    // private spriteId: Identifier;
    atlasId(): Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    spriteId(): Identifier;
    toString(): string;
}