import type { ValueTransformer } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { Protocol1_8To1_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/Protocol1_8To1_9.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SpawnPacketRewriter1_9 extends Object {
    static toNewDouble: ValueTransformer<number, number>;
    static register(paramarg0: Protocol1_8To1_9): void;
    constructor()
}