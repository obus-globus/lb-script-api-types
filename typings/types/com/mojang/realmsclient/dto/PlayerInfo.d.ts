import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { ValueObject } from '../../../../com/mojang/realmsclient/dto/ValueObject.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
export class PlayerInfo extends ValueObject implements ReflectionBasedSerialization {
    constructor(name: string, uuid: UUID, operator: boolean, accepted: boolean, online: boolean)
    accepted: boolean;
    name: string;
    online: boolean;
    operator: boolean;
    uuid: UUID;
}