import type { JsonLocation } from '../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { ContentReference } from '../../../../../../com/azure/json/implementation/jackson/core/io/ContentReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JsonStreamContext extends Object {
    static TYPE_ARRAY: number;
    static TYPE_OBJECT: number;
    static TYPE_ROOT: number;
    constructor()
    constructor(arg0: JsonStreamContext)
    constructor(arg0: number, arg1: number)
    // private _index: number;
    // private _type: number;
    getCurrentIndex(): number;
    getCurrentName(): string;
    getCurrentValue(): Object;
    getParent(): JsonStreamContext;
    getStartLocation(arg0: Object): JsonLocation;
    getTypeDesc(): string;
    inArray(): boolean;
    inObject(): boolean;
    inRoot(): boolean;
    setCurrentValue(arg0: Object): void;
    startLocation(arg0: ContentReference): JsonLocation;
    toString(): string;
    typeDesc(): string;
}