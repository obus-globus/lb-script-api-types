import type { Property } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySubstitute extends Property {
    constructor(arg0: string, arg1: Class<Object>, arg2: Class<Object>[])
    constructor(arg0: string, arg1: Class<Object>, arg2: string, arg3: string, arg4: Class<Object>[])
    readonly delegate: Property;
    // private field: Field;
    // private filler: boolean;
    // private parameters: Class<Object>[];
    // private read: Method;
    // private readMethod: string;
    targetType: Class<Object>;
    // private write: Method;
    // private writeMethod: string;
    // private discoverMethod(arg0: Class<Object>, arg1: string, arg2: Class<Object>[]): Method;
    get(arg0: Object): Object;
    getActualTypeArguments(): Class<Object>[];
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotations(): Annotation[];
    getName(): string;
    getType(): Class<Object>;
    isReadable(): boolean;
    isWritable(): boolean;
    set(arg0: Object, arg1: Object): void;
    setActualTypeArguments(arg0: Class<Object>[]): void;
    setDelegate(arg0: Property): void;
    setTargetType(arg0: Class<Object>): void;
}