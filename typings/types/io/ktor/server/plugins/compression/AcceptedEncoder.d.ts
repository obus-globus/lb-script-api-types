import type { CompressionEncoderConfig } from '../../../../../io/ktor/server/plugins/compression/CompressionEncoderConfig.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AcceptedEncoder extends Object {
    constructor(config: CompressionEncoderConfig, quality: number)
    readonly config: CompressionEncoderConfig;
    readonly quality: number;
}