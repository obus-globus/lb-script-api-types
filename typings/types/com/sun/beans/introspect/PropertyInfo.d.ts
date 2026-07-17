import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MethodInfo } from '../../../../com/sun/beans/introspect/MethodInfo.d.ts'
import type { PropertyInfo$Name } from '../../../../com/sun/beans/introspect/PropertyInfo$Name.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PropertyInfo extends Object {
    static get(paramarg0: Class<Object>): JavaMap<string, PropertyInfo>;
    private constructor()
    readonly indexed: PropertyInfo;
    // private map: JavaMap<PropertyInfo$Name, Object>;
    // private read: MethodInfo;
    // private readList: MethodInfo[];
    // private type: Class<Object>;
    // private write: MethodInfo;
    // private writeList: MethodInfo[];
    get(arg0: PropertyInfo$Name): Object;
    getIndexed(): PropertyInfo;
    getPropertyType(): Class<Object>;
    getReadMethod(): Method;
    getWriteMethod(): Method;
    // private initialize(): boolean;
    // private initialize(arg0: MethodInfo): boolean;
    is(arg0: PropertyInfo$Name): boolean;
    isConstrained(): boolean;
    // private put(arg0: PropertyInfo$Name, arg1: Object): void;
    // private put(arg0: PropertyInfo$Name, arg1: boolean): void;
    // private put(arg0: PropertyInfo$Name, arg1: string): void;
}