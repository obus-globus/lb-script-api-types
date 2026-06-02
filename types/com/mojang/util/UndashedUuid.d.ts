import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UndashedUuid extends Object {
    static fromString(paramarg0: string): UUID;
    static fromStringLenient(paramarg0: string): UUID;
    static toString(paramarg0: UUID): string;
    constructor()
}