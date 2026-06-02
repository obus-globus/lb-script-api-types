import type { TypeInfo$SUBTYPE } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/TypeInfo$SUBTYPE.d.ts'
import type { TypeInfo$TYPE } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/TypeInfo$TYPE.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeInfo extends Object {
    constructor(type: TypeInfo$TYPE, subtype: TypeInfo$SUBTYPE, className: string, descriptionType: string, isObject: boolean, isFunction: boolean, isNull: boolean, isJS: boolean)
    // private className: string;
    // private descriptionType: string;
    // private isFunction: boolean;
    // private isJS: boolean;
    // private isNull: boolean;
    // private isObject: boolean;
    // private subtype: TypeInfo$SUBTYPE;
    // private type: TypeInfo$TYPE;
}