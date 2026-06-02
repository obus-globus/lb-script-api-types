import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class Unstitcher$Region extends Record {
    static CODEC: Codec<Unstitcher$Region>;
    // private height: number;
    // private sprite: Identifier;
    // private width: number;
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    sprite(): Identifier;
    toString(): string;
    width(): number;
    x(): number;
    y(): number;
}