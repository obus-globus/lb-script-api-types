import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MojangApiKt extends Object {
    static lookupUuidByName(username: string): UUID | null;
}