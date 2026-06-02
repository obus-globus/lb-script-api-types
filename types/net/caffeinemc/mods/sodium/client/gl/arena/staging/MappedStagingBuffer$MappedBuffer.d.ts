import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBufferMapping } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferMapping.d.ts'
import type { GlImmutableBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlImmutableBuffer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
export class MappedStagingBuffer$MappedBuffer extends Record {
    private constructor(buffer: GlImmutableBuffer, map: GlBufferMapping)
    // private buffer: GlImmutableBuffer;
    // private map: GlBufferMapping;
    buffer(): GlImmutableBuffer;
    delete(arg0: CommandList): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    map(): GlBufferMapping;
    toString(): string;
}