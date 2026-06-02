import type { JsonLocation } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonStreamContext } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonStreamContext.d.ts'
import type { ContentReference } from '../../../../../../../com/azure/json/implementation/jackson/core/io/ContentReference.d.ts'
import type { DupDetector } from '../../../../../../../com/azure/json/implementation/jackson/core/json/DupDetector.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JsonReadContext extends JsonStreamContext {
    static TYPE_ARRAY: number;
    static TYPE_OBJECT: number;
    static TYPE_ROOT: number;
    static createRootContext(paramarg0: DupDetector): JsonReadContext;
    constructor(arg0: JsonReadContext, arg1: DupDetector, arg2: number, arg3: number, arg4: number)
    // private _child: JsonReadContext;
    // private _columnNr: number;
    // private _currentName: string;
    // private _currentValue: Object;
    // private _dups: DupDetector;
    // private _lineNr: number;
    // private _parent: JsonReadContext;
    // private _checkDup(arg0: DupDetector, arg1: string): void;
    clearAndGetParent(): JsonReadContext;
    createChildArrayContext(arg0: number, arg1: number): JsonReadContext;
    createChildObjectContext(arg0: number, arg1: number): JsonReadContext;
    expectComma(): boolean;
    getCurrentName(): string;
    getCurrentValue(): Object;
    getDupDetector(): DupDetector;
    getParent(): JsonReadContext;
    getStartLocation(arg0: Object): JsonLocation;
    reset(arg0: number, arg1: number, arg2: number): void;
    setCurrentName(arg0: string): void;
    setCurrentValue(arg0: Object): void;
    startLocation(arg0: ContentReference): JsonLocation;
    withDupDetector(arg0: DupDetector): JsonReadContext;
}