import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AFSocketProtocol extends Enum<AFSocketProtocol> {
    static DEFAULT: AFSocketProtocol;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AFSocketProtocol;
    static values(): AFSocketProtocol[];
    private constructor(arg2: number)
    // private id: number;
    getId(): number;
    name(): "DEFAULT";
}