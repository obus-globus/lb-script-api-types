import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EmitData } from '../../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
import type { Emitter } from '../../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
export class AsyncEmitter$EmitDataCache extends Object {
    constructor(null_: AsyncEmitter$EmitDataCache, arg1: number)
    // private estimatedSize: number;
    // private map: { [key: string]: EmitData[] };
    // private maxBytes: number;
    // private size: number;
    add(arg0: EmitData): void;
    // private emitAll(): void;
    // private tryToEmit(arg0: Emitter, arg1: EmitData[]): void;
    updateEstimatedSize(arg0: number): void;
}