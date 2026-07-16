import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CommentType extends Enum<CommentType> {
    static BLANK_LINE: CommentType;
    static BLOCK: CommentType;
    static IN_LINE: CommentType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CommentType;
    static values(): CommentType[];
    private constructor()
    name(): "BLANK_LINE" | "BLOCK" | "IN_LINE";
}