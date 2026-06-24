import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { RefCnt } from '../../../io/netty/util/internal/RefCnt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractReferenceCounted extends Object implements ReferenceCounted {
    constructor()
    // private refCnt: RefCnt;
    deallocate(): void;
    // private handleRelease(arg0: boolean): boolean;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): ReferenceCounted;
    retain(arg0: number): ReferenceCounted;
    setRefCnt(arg0: number): void;
    touch(): ReferenceCounted;
    touch(arg0: Object): ReferenceCounted;
}