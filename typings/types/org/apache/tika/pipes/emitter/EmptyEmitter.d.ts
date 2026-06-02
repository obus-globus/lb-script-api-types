import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { EmitData } from '../../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
import type { Emitter } from '../../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
export class EmptyEmitter extends Object implements Emitter {
    constructor()
    emit(arg0: EmitData[]): void;
    emit(arg0: string, arg1: Metadata[], arg2: ParseContext): void;
    getName(): string;
}