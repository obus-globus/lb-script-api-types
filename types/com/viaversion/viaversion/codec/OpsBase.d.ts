import type { CodecContext } from '../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { Ops } from '../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OpsBase extends Object implements Ops {
    constructor(arg0: CodecContext)
    // private context: CodecContext;
    context(): CodecContext;
}