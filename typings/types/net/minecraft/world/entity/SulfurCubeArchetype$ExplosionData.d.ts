import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SulfurCubeArchetype$ExplosionData extends Record {
    static CODEC: Codec<SulfurCubeArchetype$ExplosionData>;
    constructor(power: number, causesFire: boolean, fuse: number)
    // private causesFire: boolean;
    // private fuse: number;
    // private power: number;
    causesFire(): boolean;
    equals(o: Object | null): boolean;
    fuse(): number;
    hashCode(): number;
    power(): number;
    toString(): string;
}