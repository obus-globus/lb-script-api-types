import type { PropertyInfo } from '../../com/sun/beans/introspect/PropertyInfo.d.ts'
import type { FeatureDescriptor } from '../../java/beans/FeatureDescriptor.d.ts'
import type { MethodRef } from '../../java/beans/MethodRef.d.ts'
import type { PropertyEditor } from '../../java/beans/PropertyEditor.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Reference } from '../../java/lang/ref/Reference.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class PropertyDescriptor extends FeatureDescriptor {
    constructor(arg0: PropertyDescriptor)
    constructor(arg0: PropertyDescriptor, arg1: PropertyDescriptor)
    constructor(arg0: string, arg1: Class<Object>)
    constructor(arg0: string, arg1: Class<Object>, arg2: string, arg3: string)
    constructor(arg0: string, arg1: Method, arg2: Method)
    constructor(arg0: Map$Entry<string, PropertyInfo>, arg1: boolean)
    // private baseName: string;
    readonly bound: boolean;
    readonly constrained: boolean;
    // private propertyEditorClassRef: Reference<Class<Object>>;
    // private propertyTypeRef: Reference<Class<Object>>;
    // private readMethodName: string;
    // private readMethodRef: MethodRef;
    // private writeMethodName: string;
    // private writeMethodRef: MethodRef;
    appendTo(arg0: StringBuilder): void;
    compareMethods(arg0: Method, arg1: Method): boolean;
    createPropertyEditor(arg0: Object): PropertyEditor;
    equals(arg0: Object | null): boolean;
    // private findPropertyType(arg0: Method, arg1: Method): Class<Object>;
    getBaseName(): string;
    getPropertyEditorClass(): Class<Object>;
    getPropertyType(): Class<Object>;
    // private getPropertyType0(): Class<Object>;
    getReadMethod(): Method;
    getWriteMethod(): Method;
    hashCode(): number;
    isAssignable(arg0: Method, arg1: Method): boolean;
    isBound(): boolean;
    isConstrained(): boolean;
    setBound(arg0: boolean): void;
    setClass0(arg0: Class<Object>): void;
    setConstrained(arg0: boolean): void;
    setPropertyEditorClass(arg0: Class<Object>): void;
    // private setPropertyType(arg0: Class<Object>): void;
    setReadMethod(arg0: Method): void;
    // private setReadMethod0(arg0: Method): void;
    setWriteMethod(arg0: Method): void;
    // private setWriteMethod0(arg0: Method): void;
    updateGenericsFor(arg0: Class<Object>): void;
}