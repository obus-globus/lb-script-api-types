import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MessagePatternUtil$MessageContentsNode$Type extends Enum<MessagePatternUtil$MessageContentsNode$Type> {
    static ARG: MessagePatternUtil$MessageContentsNode$Type;
    static REPLACE_NUMBER: MessagePatternUtil$MessageContentsNode$Type;
    static TEXT: MessagePatternUtil$MessageContentsNode$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MessagePatternUtil$MessageContentsNode$Type;
    static values(): MessagePatternUtil$MessageContentsNode$Type[];
    private constructor()
    name(): "TEXT" | "ARG" | "REPLACE_NUMBER";
}