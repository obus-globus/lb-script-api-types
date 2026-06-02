import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefinePropertyUtil extends Object {
    static getPropertyByKey(paramthisObj: JSDynamicObject, paramkey: Object): Property;
    static isCompatiblePropertyDescriptor(paramextensible: boolean, paramdescriptor: PropertyDescriptor, paramcurrent: PropertyDescriptor): boolean;
    static isCompatiblePropertyDescriptor(paramextensible: boolean, paramdescriptor: PropertyDescriptor, paramcurrent: PropertyDescriptor, paramdoThrow: boolean): boolean;
    static nonConfigurableMessage(paramkey: Object, paramreject: boolean): string;
    static nonWritableMessage(paramkey: Object, paramreject: boolean): string;
    static notExtensibleMessage(paramkey: Object, paramreject: boolean): string;
    static ordinaryDefineOwnProperty(paramthisObj: JSDynamicObject, parampropertyKey: Object, paramdescriptor: PropertyDescriptor, paramdoThrow: boolean): boolean;
    static reject(paramdoThrow: boolean, parammessage: string): boolean;
    static validateAndApplyPropertyDescriptor(paramthisObj: JSDynamicObject, parampropertyKey: Object, paramextensible: boolean, paramdescriptor: PropertyDescriptor, paramcurrent: PropertyDescriptor, paramdoThrow: boolean): boolean;
    private constructor()
}