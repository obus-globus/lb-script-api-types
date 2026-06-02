import type { Instant } from '../../../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MessageMetadata extends Object {
    constructor(arg0: UUID, arg1: Instant, arg2: number)
    constructor(arg0: UUID, arg1: number, arg2: number)
    // private salt: number;
    // private sender: UUID;
    // private timestamp: Instant;
    salt(): number;
    sender(): UUID;
    timestamp(): Instant;
}