import type { AbstractReferenceCounted } from '../../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ReferenceCounted } from '../../../../../../io/netty/util/ReferenceCounted.d.ts'
import type { ObjectPool$Handle } from '../../../../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EncapsulatedPacket } from '../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
export class RakDatagramPacket extends AbstractReferenceCounted {
    static newInstance(): RakDatagramPacket;
    private constructor(arg0: ObjectPool$Handle<RakDatagramPacket>)
    readonly flags: number;
    // private handle: ObjectPool$Handle<RakDatagramPacket>;
    readonly nextSend: number;
    readonly packets: EncapsulatedPacket[];
    readonly sendTime: number;
    readonly sequenceIndex: number;
    deallocate(): void;
    getFlags(): number;
    getNextSend(): number;
    getPackets(): EncapsulatedPacket[];
    getSendTime(): number;
    getSequenceIndex(): number;
    getSize(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): RakDatagramPacket;
    retain(arg0: number): RakDatagramPacket;
    setFlag(arg0: number): void;
    setFlags(arg0: number): void;
    setNextSend(arg0: number): void;
    setSendTime(arg0: number): void;
    setSequenceIndex(arg0: number): void;
    toString(): string;
    touch(): ReferenceCounted;
    touch(arg0: Object): RakDatagramPacket;
    tryAddPacket(arg0: EncapsulatedPacket, arg1: number): boolean;
}