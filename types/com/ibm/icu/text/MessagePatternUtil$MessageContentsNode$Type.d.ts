import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MessagePatternUtil$MessageContentsNode$Type extends Enum<MessagePatternUtil$MessageContentsNode$Type> {
    static ARG: MessagePatternUtil$MessageContentsNode$Type;
    static REPLACE_NUMBER: MessagePatternUtil$MessageContentsNode$Type;
    static TEXT: MessagePatternUtil$MessageContentsNode$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MessagePatternUtil$MessageContentsNode$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "TEXT" | "ARG" | "REPLACE_NUMBER";
}