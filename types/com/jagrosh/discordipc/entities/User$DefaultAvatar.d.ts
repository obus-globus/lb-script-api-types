import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class User$DefaultAvatar extends Enum<User$DefaultAvatar> {
    static BLURPLE: User$DefaultAvatar;
    static GREEN: User$DefaultAvatar;
    static GREY: User$DefaultAvatar;
    static ORANGE: User$DefaultAvatar;
    static PINK: User$DefaultAvatar;
    static RED: User$DefaultAvatar;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): User$DefaultAvatar;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private text: string;
    toString(): string;
    name(): "BLURPLE" | "GREY" | "GREEN" | "ORANGE" | "RED" | "PINK";
}