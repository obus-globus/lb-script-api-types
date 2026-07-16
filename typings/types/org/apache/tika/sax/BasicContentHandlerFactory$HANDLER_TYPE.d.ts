import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BasicContentHandlerFactory$HANDLER_TYPE extends Enum<BasicContentHandlerFactory$HANDLER_TYPE> {
    static BODY: BasicContentHandlerFactory$HANDLER_TYPE;
    static HTML: BasicContentHandlerFactory$HANDLER_TYPE;
    static IGNORE: BasicContentHandlerFactory$HANDLER_TYPE;
    static TEXT: BasicContentHandlerFactory$HANDLER_TYPE;
    static XML: BasicContentHandlerFactory$HANDLER_TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BasicContentHandlerFactory$HANDLER_TYPE;
    static values(): BasicContentHandlerFactory$HANDLER_TYPE[];
    private constructor()
    name(): "BODY" | "IGNORE" | "TEXT" | "HTML" | "XML";
}