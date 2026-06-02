import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UuidUtil extends Object {
    static fromUndashedString(paramarg0: string): UUID;
    static isDashedUuid(paramarg0: string): boolean;
    static isUndashedUuid(paramarg0: string): boolean;
    static toUndashedString(paramarg0: UUID): string;
    constructor()
}