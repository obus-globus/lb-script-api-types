import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UUIDUtil extends Object {
    static fromIntArray(paramarg0: number[]): UUID;
    static parseUUID(paramarg0: string): UUID;
    static toIntArray(paramarg0: UUID): number[];
    static toIntArray(paramarg0: number, paramarg1: number): number[];
    constructor()
}