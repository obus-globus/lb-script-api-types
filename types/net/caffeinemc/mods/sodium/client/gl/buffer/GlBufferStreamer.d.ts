import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlBufferMapping } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferMapping.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
export class GlBufferStreamer extends Object {
    constructor(arg0: CommandList, arg1: number, arg2: number)
    // private buffer: GlBuffer;
    // private bufferSize: number;
    // private mapping: GlBufferMapping;
    // private requiresFlush: boolean;
    // private stride: number;
    // private writeAddress: number;
    delete(arg0: CommandList): void;
    prepare(arg0: CommandList): GlBuffer;
    writeData(arg0: number, arg1: number): void;
}