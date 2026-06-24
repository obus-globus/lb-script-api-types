import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ExtraCodecs$TagOrElementLocation extends Record {
    constructor(id: Identifier, tag: boolean)
    // private id: Identifier;
    // private tag: boolean;
    // private decoratedId(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    tag(): boolean;
    toString(): string;
}