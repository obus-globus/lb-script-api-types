import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DecoratedPotPattern extends Record {
    constructor(assetId: Identifier)
    // private assetId: Identifier;
    assetId(): Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}