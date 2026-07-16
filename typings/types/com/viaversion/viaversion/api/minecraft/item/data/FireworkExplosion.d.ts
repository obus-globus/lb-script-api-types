import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FireworkExplosion extends Record implements Copyable {
    static ARRAY_TYPE: Type<FireworkExplosion[]>;
    static SHAPES: string[];
    static TYPE: Type<FireworkExplosion>;
    static copy(paramarg0: Object | null): Object | null;
    constructor(shape: number, colors: number[], fadeColors: number[], hasTrail: boolean, hasTwinkle: boolean)
    // private colors: number[];
    // private fadeColors: number[];
    // private hasTrail: boolean;
    // private hasTwinkle: boolean;
    // private shape: number;
    colors(): number[];
    copy(): FireworkExplosion;
    equals(arg0: Object | null): boolean;
    fadeColors(): number[];
    hasTrail(): boolean;
    hasTwinkle(): boolean;
    hashCode(): number;
    shape(): number;
    toString(): string;
}