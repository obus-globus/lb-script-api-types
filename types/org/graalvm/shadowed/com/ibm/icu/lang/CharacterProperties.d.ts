import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CodePointMap$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointMap$Range.d.ts'
export class CharacterProperties extends Object {
    static getBinaryPropertySet(paramproperty: number): string[];
    static getIntPropertyMap(paramproperty: number): CodePointMap$Range[];
    private constructor()
}