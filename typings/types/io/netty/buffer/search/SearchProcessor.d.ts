import type { ByteProcessor } from '../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SearchProcessor extends ByteProcessor, Object{
    process(arg0: number): boolean;
    reset(): void;
}