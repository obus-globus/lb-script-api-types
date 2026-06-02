import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OutboundPlayer extends Object implements ReflectionBasedSerialization {
    constructor()
    name: string;
    uuid: UUID;
}