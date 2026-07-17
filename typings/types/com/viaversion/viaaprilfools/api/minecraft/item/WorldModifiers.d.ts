import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WorldModifiers extends Record implements Copyable {
    static TYPE: Type<WorldModifiers>;
    constructor(effects: number[], includeDescription: boolean)
    // private effects: number[];
    // private includeDescription: boolean;
    copy(): WorldModifiers;
    effects(): number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    includeDescription(): boolean;
    toString(): string;
}