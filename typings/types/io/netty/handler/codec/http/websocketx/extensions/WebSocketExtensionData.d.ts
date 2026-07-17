import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WebSocketExtensionData extends Object {
    constructor(arg0: string, arg1: JavaMap<string, string>)
    // private name: string;
    // private parameters: JavaMap<string, string>;
    name(): string;
    parameters(): JavaMap<string, string>;
}