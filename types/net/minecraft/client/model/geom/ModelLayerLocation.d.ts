import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelLayerLocation extends Record {
    constructor(model: Identifier, layer: string)
    // private layer: string;
    // private model: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layer(): string;
    model(): Identifier;
    toString(): string;
}