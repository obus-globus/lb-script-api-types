import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Rewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/Rewriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RewriterBase<T extends Protocol<any, any, any, any>> extends Object implements Rewriter<T> {
    constructor(arg0: T)
    // private protocol: T;
    protocol(): T;
    register(): void;
    registerPackets(): void;
    registerRewrites(): void;
}