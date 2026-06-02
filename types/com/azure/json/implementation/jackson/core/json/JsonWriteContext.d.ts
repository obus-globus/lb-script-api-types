import type { JsonStreamContext } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonStreamContext.d.ts'
import type { DupDetector } from '../../../../../../../com/azure/json/implementation/jackson/core/json/DupDetector.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JsonWriteContext extends JsonStreamContext {
    static STATUS_EXPECT_NAME: number;
    static STATUS_EXPECT_VALUE: number;
    static STATUS_OK_AFTER_COLON: number;
    static STATUS_OK_AFTER_COMMA: number;
    static STATUS_OK_AFTER_SPACE: number;
    static STATUS_OK_AS_IS: number;
    static TYPE_ARRAY: number;
    static TYPE_OBJECT: number;
    static TYPE_ROOT: number;
    static createRootContext(): JsonWriteContext;
    static createRootContext(paramarg0: DupDetector): JsonWriteContext;
    constructor(arg0: number, arg1: JsonWriteContext, arg2: DupDetector)
    constructor(arg0: number, arg1: JsonWriteContext, arg2: DupDetector, arg3: Object)
    // private _child: JsonWriteContext;
    // private _currentName: string;
    // private _currentValue: Object;
    // private _dups: DupDetector;
    // private _gotName: boolean;
    // private _parent: JsonWriteContext;
    // private _checkDup(arg0: DupDetector, arg1: string): void;
    clearAndGetParent(): JsonWriteContext;
    createChildArrayContext(): JsonWriteContext;
    createChildArrayContext(arg0: Object): JsonWriteContext;
    createChildObjectContext(): JsonWriteContext;
    createChildObjectContext(arg0: Object): JsonWriteContext;
    getCurrentName(): string;
    getCurrentValue(): Object;
    getDupDetector(): DupDetector;
    getParent(): JsonWriteContext;
    reset(arg0: number): JsonWriteContext;
    reset(arg0: number, arg1: Object): JsonWriteContext;
    setCurrentValue(arg0: Object): void;
    withDupDetector(arg0: DupDetector): JsonWriteContext;
    writeFieldName(arg0: string): number;
    writeValue(): number;
}