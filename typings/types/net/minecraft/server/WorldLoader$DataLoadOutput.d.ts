import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
export class WorldLoader$DataLoadOutput<D extends unknown> extends Record {
    constructor(cookie: D, finalDimensions: RegistryAccess$Frozen)
    // private cookie: D;
    // private finalDimensions: RegistryAccess$Frozen;
    cookie(): D;
    equals(o: Object | null): boolean;
    finalDimensions(): RegistryAccess$Frozen;
    hashCode(): number;
    toString(): string;
}