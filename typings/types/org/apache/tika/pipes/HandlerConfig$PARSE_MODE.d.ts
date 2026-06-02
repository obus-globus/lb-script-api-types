import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HandlerConfig$PARSE_MODE extends Enum<HandlerConfig$PARSE_MODE> {
    static CONCATENATE: HandlerConfig$PARSE_MODE;
    static RMETA: HandlerConfig$PARSE_MODE;
    static parseMode(paramarg0: string): HandlerConfig$PARSE_MODE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HandlerConfig$PARSE_MODE;
    static values(): (Object | null)[];
    private constructor()
    name(): "RMETA" | "CONCATENATE";
}