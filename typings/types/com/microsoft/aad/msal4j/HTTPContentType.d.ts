import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HTTPContentType extends Enum<HTTPContentType> {
    static ApplicationJSON: HTTPContentType;
    static ApplicationURLEncoded: HTTPContentType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HTTPContentType;
    static values(): HTTPContentType[];
    private constructor(arg2: string)
    contentType: string;
    name(): "ApplicationURLEncoded" | "ApplicationJSON";
}