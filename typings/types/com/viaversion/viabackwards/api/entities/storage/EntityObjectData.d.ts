import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityReplacement } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityReplacement.d.ts'
export class EntityObjectData extends EntityReplacement {
    constructor(arg0: BackwardsProtocol<any, any, any, any>, arg1: string, arg2: number, arg3: number, arg4: number)
    // private objectData: number;
    isObjectType(): boolean;
    objectData(): number;
}