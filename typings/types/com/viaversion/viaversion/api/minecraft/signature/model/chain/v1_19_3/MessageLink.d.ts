import type { DataConsumer } from '../../../../../../../../../com/viaversion/viaversion/api/minecraft/signature/util/DataConsumer.d.ts'
import type { UUID } from '../../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class MessageLink extends Object {
    constructor(arg0: UUID, arg1: UUID)
    constructor(arg0: number, arg1: UUID, arg2: UUID)
    // private index: number;
    // private sender: UUID;
    // private sessionId: UUID;
    next(): MessageLink;
    update(arg0: (param0: number[]) => void): void;
}