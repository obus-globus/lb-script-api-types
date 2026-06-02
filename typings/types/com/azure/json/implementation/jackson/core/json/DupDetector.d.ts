import type { JsonGenerator } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DupDetector extends Object {
    static rootDetector(paramarg0: JsonGenerator): DupDetector;
    static rootDetector(paramarg0: JsonParser): DupDetector;
    private constructor(arg0: Object)
    // private _firstName: string;
    // private _secondName: string;
    // private _seen: string[];
    // private _source: Object;
    child(): DupDetector;
    getSource(): Object;
    isDup(arg0: string): boolean;
    reset(): void;
}