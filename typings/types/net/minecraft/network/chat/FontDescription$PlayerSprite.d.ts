import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FontDescription } from '../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { FontDescription$Resource } from '../../../../net/minecraft/network/chat/FontDescription$Resource.d.ts'
import type { ResolvableProfile } from '../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class FontDescription$PlayerSprite extends Record implements FontDescription {
    static CODEC: Codec<FontDescription>;
    static DEFAULT: FontDescription$Resource;
    constructor(profile: ResolvableProfile, hat: boolean)
    // private hat: boolean;
    // private profile: ResolvableProfile;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hat(): boolean;
    profile(): ResolvableProfile;
    toString(): string;
}