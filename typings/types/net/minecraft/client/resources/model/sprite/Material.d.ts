import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class Material extends Record {
    static CODEC: Codec<Material>;
    // private forceTranslucent: boolean;
    // private sprite: Identifier;
    equals(o: Object | null): boolean;
    forceTranslucent(): boolean;
    hashCode(): number;
    sprite(): Identifier;
    toString(): string;
    withForceTranslucent(forceTranslucent: boolean): Material;
}