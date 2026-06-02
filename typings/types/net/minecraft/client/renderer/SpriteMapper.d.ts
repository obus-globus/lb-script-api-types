import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SpriteId } from '../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteMapper extends Record {
    constructor(sheet: Identifier, prefix: string)
    // private prefix: string;
    // private sheet: Identifier;
    apply(path: Identifier): SpriteId;
    defaultNamespaceApply(path: string): SpriteId;
    equals(o: Object | null): boolean;
    hashCode(): number;
    prefix(): string;
    sheet(): Identifier;
    toString(): string;
}