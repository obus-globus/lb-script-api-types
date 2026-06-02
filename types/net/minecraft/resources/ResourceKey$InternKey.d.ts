import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ResourceKey$InternKey extends Record {
    private constructor(registry: Identifier, identifier: Identifier)
    // private identifier: Identifier;
    // private registry: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    identifier(): Identifier;
    registry(): Identifier;
    toString(): string;
}