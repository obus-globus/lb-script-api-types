import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4BlockInputStream } from '../../../net/jpountz/lz4/LZ4BlockInputStream.d.ts'
import type { LZ4FastDecompressor } from '../../../net/jpountz/lz4/LZ4FastDecompressor.d.ts'
import type { LZ4SafeDecompressor } from '../../../net/jpountz/lz4/LZ4SafeDecompressor.d.ts'
export class LZ4BlockInputStream$Builder extends Object {
    private constructor()
    // private checksum: Checksum;
    // private fastDecompressor: LZ4FastDecompressor;
    // private safeDecompressor: LZ4SafeDecompressor;
    // private stopOnEmptyBlock: boolean;
    build(arg0: InputStream): LZ4BlockInputStream;
    withChecksum(arg0: Checksum): LZ4BlockInputStream$Builder;
    withDecompressor(arg0: LZ4FastDecompressor): LZ4BlockInputStream$Builder;
    withDecompressor(arg0: LZ4SafeDecompressor): LZ4BlockInputStream$Builder;
    withStopOnEmptyBlock(arg0: boolean): LZ4BlockInputStream$Builder;
}