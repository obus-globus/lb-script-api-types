import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { ConfigBase } from '../../../../../org/apache/tika/config/ConfigBase.d.ts'
import type { Emitter } from '../../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
export class EmitterManager extends ConfigBase {
    static load(paramarg0: Path): EmitterManager;
    constructor(arg0: Emitter[])
    // private emitterMap: JavaMap<string, Emitter>;
    getEmitter(): Emitter;
    getEmitter(arg0: string): Emitter;
    getSupported(): string[];
}