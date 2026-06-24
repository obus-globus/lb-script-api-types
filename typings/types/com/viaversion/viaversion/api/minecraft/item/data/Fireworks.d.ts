import type { FireworkExplosion } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FireworkExplosion.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Fireworks extends Record implements Copyable {
    static TYPE: Type<Fireworks>;
    static copy(paramarg0: Object | null): Object | null;
    constructor(flightDuration: number, explosions: FireworkExplosion[])
    // private explosions: FireworkExplosion[];
    // private flightDuration: number;
    copy(): Fireworks;
    equals(arg0: Object | null): boolean;
    explosions(): FireworkExplosion[];
    flightDuration(): number;
    hashCode(): number;
    toString(): string;
}