import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FileRegion extends ReferenceCounted, Object{
    count(): number;
    position(): number;
    retain(): FileRegion;
    retain(arg0: number): FileRegion;
    touch(): FileRegion;
    touch(arg0: Object): FileRegion;
    transferTo(arg0: WritableByteChannel, arg1: number): number;
    transfered(): number;
    transferred(): number;
}