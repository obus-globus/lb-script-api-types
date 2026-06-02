import type { BaseErrorListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/BaseErrorListener.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConsoleErrorListener extends BaseErrorListener {
    static INSTANCE: ConsoleErrorListener;
    constructor()
    syntaxError(arg0: Recognizer<Object, Object>, arg1: Object, arg2: number, arg3: number, arg4: string, arg5: RecognitionException): void;
}