import type { ConfigBase } from '../../../../../org/apache/tika/config/ConfigBase.d.ts'
import type { Emitter } from '../../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
export class EmitterManager extends ConfigBase {
    static load(paramarg0: Path[][]): EmitterManager;
    private constructor()
    constructor(arg0: Emitter[])
    // private emitterMap: { [key: string]: Emitter };
    getEmitter(): Emitter;
    getEmitter(arg0: string): Emitter;
    getSupported(): string[];
}