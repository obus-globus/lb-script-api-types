import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FriendsService$PlayerData extends Record {
    constructor(id: UUID, name: string)
    // private id: UUID;
    // private name: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    name(): string;
    toString(): string;
}