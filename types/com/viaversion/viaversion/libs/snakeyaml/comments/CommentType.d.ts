import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CommentType extends Enum<CommentType> {
    static BLANK_LINE: CommentType;
    static BLOCK: CommentType;
    static IN_LINE: CommentType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CommentType;
    static values(): (Object | null)[];
    private constructor()
    name(): "BLANK_LINE" | "BLOCK" | "IN_LINE";
}