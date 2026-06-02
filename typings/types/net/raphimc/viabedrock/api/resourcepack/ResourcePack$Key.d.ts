import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResourcePack$Key extends Record {
    static fromString(paramarg0: string): ResourcePack$Key;
    constructor(id: UUID, version: string)
    // private id: UUID;
    // private version: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    toString(): string;
    version(): string;
}