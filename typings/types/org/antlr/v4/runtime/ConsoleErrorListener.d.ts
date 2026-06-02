import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseErrorListener } from '../../../../org/antlr/v4/runtime/BaseErrorListener.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
export class ConsoleErrorListener extends BaseErrorListener {
    static INSTANCE: ConsoleErrorListener;
    constructor()
    syntaxError(arg0: Recognizer<Object, Object>, arg1: Object, arg2: number, arg3: number, arg4: string, arg5: RecognitionException): void;
}