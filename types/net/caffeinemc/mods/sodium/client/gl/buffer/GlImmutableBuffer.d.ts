import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlBufferStorageFlags } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferStorageFlags.d.ts'
import type { EnumBitField } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/util/EnumBitField.d.ts'
export class GlImmutableBuffer extends GlBuffer {
    constructor(arg0: EnumBitField<GlBufferStorageFlags>)
    readonly flags: EnumBitField<GlBufferStorageFlags>;
    getFlags(): EnumBitField<GlBufferStorageFlags>;
}