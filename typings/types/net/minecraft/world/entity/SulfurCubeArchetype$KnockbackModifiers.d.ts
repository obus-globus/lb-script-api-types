import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SulfurCubeArchetype$KnockbackModifiers extends Record {
    static CODEC: Codec<SulfurCubeArchetype$KnockbackModifiers>;
    constructor(horizontalPower: number, verticalPower: number)
    // private horizontalPower: number;
    // private verticalPower: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    horizontalPower(): number;
    toString(): string;
    verticalPower(): number;
}