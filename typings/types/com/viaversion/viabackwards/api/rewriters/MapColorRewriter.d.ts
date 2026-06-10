import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { IdRewriteFunction } from '../../../../../com/viaversion/viaversion/rewriter/IdRewriteFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapColorRewriter extends Object {
    static getRewriteHandler(paramarg0: (param0: number) => number): (param0: PacketWrapper) => void;
    static rewriteMapColors(paramarg0: PacketWrapper, paramarg1: (param0: number) => number, paramarg2: number): void;
    constructor()
}