import type { SearchProcessor } from '../../../../io/netty/buffer/search/SearchProcessor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MultiSearchProcessor extends SearchProcessor, Object{
    getFoundNeedleId(): number;
    process(arg0: number): boolean;
    reset(): void;
}