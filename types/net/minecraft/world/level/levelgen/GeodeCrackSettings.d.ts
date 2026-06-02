import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GeodeCrackSettings extends Object {
    static CODEC: Codec<GeodeCrackSettings>;
    constructor(generateCrackChance: number, baseCrackSize: number, crackPointOffset: number)
    baseCrackSize: number;
    crackPointOffset: number;
    generateCrackChance: number;
}