import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HandlerConfig$PARSE_MODE extends Enum<HandlerConfig$PARSE_MODE> {
    static CONCATENATE: HandlerConfig$PARSE_MODE;
    static RMETA: HandlerConfig$PARSE_MODE;
    static parseMode(paramarg0: string): HandlerConfig$PARSE_MODE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HandlerConfig$PARSE_MODE;
    static values(): HandlerConfig$PARSE_MODE[];
    private constructor()
    name(): "RMETA" | "CONCATENATE";
}