import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
export class GlMutableBuffer extends GlBuffer {
    constructor()
    readonly size: number;
    getSize(): number;
    setSize(arg0: number): void;
}