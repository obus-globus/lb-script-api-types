import type { EntityType } from '../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { EntityTypeUtil$EntityIdSetter } from '../../../../com/viaversion/viaversion/util/EntityTypeUtil$EntityIdSetter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EntityTypeUtil extends Object {
    static createSizedArray(paramarg0: (Object | null)[]): (Object | null)[];
    static getTypeFromId(paramarg0: (Object | null)[], paramarg1: number, paramarg2: EntityType): EntityType;
    static initialize(paramarg0: Object | null, paramarg1: (Object | null)[], paramarg2: Protocol<Object, Object, Object, Object>, paramarg3: (param0: Object | null, param1: Object | null) => void): void;
    static toOrderedArray(paramarg0: (Object | null)[]): (Object | null)[];
    constructor()
}