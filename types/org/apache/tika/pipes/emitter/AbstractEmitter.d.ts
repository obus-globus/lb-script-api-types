import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EmitData } from '../../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
import type { Emitter } from '../../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
export abstract class AbstractEmitter extends Object implements Emitter {
    constructor()
    readonly name: string;
    emit(arg0: EmitData[]): void;
    getName(): string;
    setName(arg0: string): void;
}