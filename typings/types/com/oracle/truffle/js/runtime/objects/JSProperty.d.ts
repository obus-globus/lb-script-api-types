import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProperty extends Object {
    static ACCESSOR: number;
    static CONST: number;
    static MODULE_NAMESPACE_EXPORT: number;
    static PROXY: number;
    static getConstantProxy(paramproxyProperty: Property): PropertyProxy;
    static getValue(paramproperty: Property, paramstore: JSDynamicObject, paramthisObj: Object, paramencapsulatingNode: Node): Object;
    static isAccessor(paramproperty: Property): boolean;
    static isAccessor(paramflags: number): boolean;
    static isConfigurable(paramproperty: Property): boolean;
    static isConfigurable(paramflags: number): boolean;
    static isConst(paramproperty: Property): boolean;
    static isConst(paramflags: number): boolean;
    static isData(paramproperty: Property): boolean;
    static isData(paramflags: number): boolean;
    static isDataSpecial(paramproperty: Property): boolean;
    static isDataSpecial(paramflags: number): boolean;
    static isEnumerable(paramproperty: Property): boolean;
    static isEnumerable(paramflags: number): boolean;
    static isModuleNamespaceExport(paramproperty: Property): boolean;
    static isModuleNamespaceExport(paramflags: number): boolean;
    static isProxy(paramproperty: Property): boolean;
    static isProxy(paramflags: number): boolean;
    static isWritable(paramproperty: Property): boolean;
    static isWritable(paramflags: number): boolean;
    static setValue(paramproperty: Property, paramstore: JSDynamicObject, paramthisObj: Object, paramvalue: Object, paramisStrict: boolean, paramencapsulatingNode: Node): boolean;
    static toString(paramproperty: Property): string;
    private constructor()
}