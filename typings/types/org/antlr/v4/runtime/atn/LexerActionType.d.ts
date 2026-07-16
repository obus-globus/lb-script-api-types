import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LexerActionType extends Enum<LexerActionType> {
    static CHANNEL: LexerActionType;
    static CUSTOM: LexerActionType;
    static MODE: LexerActionType;
    static MORE: LexerActionType;
    static POP_MODE: LexerActionType;
    static PUSH_MODE: LexerActionType;
    static SKIP: LexerActionType;
    static TYPE: LexerActionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LexerActionType;
    static values(): LexerActionType[];
    private constructor()
    name(): "CHANNEL" | "CUSTOM" | "MODE" | "MORE" | "POP_MODE" | "PUSH_MODE" | "SKIP" | "TYPE";
}