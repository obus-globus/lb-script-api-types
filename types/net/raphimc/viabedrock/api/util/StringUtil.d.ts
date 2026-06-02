import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringUtil extends Object {
    static encodeLong(paramarg0: number): string;
    static encodeUUID(paramarg0: UUID): string;
    static makeIdentifierValueSafe(paramarg0: string): string;
    constructor()
}