import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractReferenceCountedByteBuf extends AbstractByteBuf {
    constructor(arg0: number)
    // private refCnt: number;
    deallocate(): void;
    // private handleRelease(arg0: boolean): boolean;
    isAccessible(): boolean;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    resetRefCnt(): void;
    retain(): ByteBuf;
    retain(arg0: number): ByteBuf;
    setRefCnt(arg0: number): void;
    touch(): ByteBuf;
    touch(arg0: Object): ByteBuf;
}