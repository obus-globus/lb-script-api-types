import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassDefinitionNode$ClassDefinitionResumptionRecord extends Record {
    // private constructor: JSFunctionObject;
    // private decorators: Object[];
    // private instanceElementIndex: number;
    // private instanceElements: ClassElementDefinitionRecord[];
    // private proto: JSObject;
    // private startIndex: number;
    // private staticElementIndex: number;
    // private staticElements: ClassElementDefinitionRecord[];
    constructor(): JSFunctionObject;
    decorators(): Object[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    instanceElementIndex(): number;
    instanceElements(): ClassElementDefinitionRecord[];
    proto(): JSObject;
    startIndex(): number;
    staticElementIndex(): number;
    staticElements(): ClassElementDefinitionRecord[];
    toString(): string;
}