import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractReferenceCounted } from '../../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ObjectPool$Handle } from '../../../../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakReliability } from '../../../../../../org/cloudburstmc/netty/channel/raknet/RakReliability.d.ts'
import type { RakMessage } from '../../../../../../org/cloudburstmc/netty/channel/raknet/packet/RakMessage.d.ts'
export class EncapsulatedPacket extends AbstractReferenceCounted {
    static newInstance(): EncapsulatedPacket;
    private constructor(arg0: ObjectPool$Handle<EncapsulatedPacket>)
    readonly buffer: ByteBuf;
    // private handle: ObjectPool$Handle<EncapsulatedPacket>;
    readonly needsBAS: boolean;
    readonly orderingChannel: number;
    readonly orderingIndex: number;
    readonly partCount: number;
    readonly partId: number;
    readonly partIndex: number;
    readonly reliability: RakReliability;
    readonly reliabilityIndex: number;
    readonly sequenceIndex: number;
    readonly split: boolean;
    deallocate(): void;
    decode(arg0: ByteBuf): void;
    encode(arg0: ByteBuf[]): void;
    fromSplit(arg0: ByteBuf): EncapsulatedPacket;
    getBuffer(): ByteBuf;
    getOrderingChannel(): number;
    getOrderingIndex(): number;
    getPartCount(): number;
    getPartId(): number;
    getPartIndex(): number;
    getReliability(): RakReliability;
    getReliabilityIndex(): number;
    getSequenceIndex(): number;
    getSize(): number;
    isNeedsBAS(): boolean;
    isSplit(): boolean;
    retain(): EncapsulatedPacket;
    setBuffer(arg0: ByteBuf): void;
    setNeedsBAS(arg0: boolean): void;
    setOrderingChannel(arg0: number): void;
    setOrderingIndex(arg0: number): void;
    setPartCount(arg0: number): void;
    setPartId(arg0: number): void;
    setPartIndex(arg0: number): void;
    setReliability(arg0: RakReliability): void;
    setReliabilityIndex(arg0: number): void;
    setSequenceIndex(arg0: number): void;
    setSplit(arg0: boolean): void;
    toMessage(): RakMessage;
    toString(): string;
    touch(arg0: Object): EncapsulatedPacket;
}