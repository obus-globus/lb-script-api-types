import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BeanAccess } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/BeanAccess.d.ts'
import type { Property } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { PropertySubstitute } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/PropertySubstitute.d.ts'
import type { PropertyUtils } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/PropertyUtils.d.ts'
import type { Node } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeDescription extends Object {
    constructor(arg0: Class<Object>)
    constructor(arg0: Class<Object>, arg1: Tag)
    constructor(arg0: Class<Object>, arg1: Tag, arg2: Class<Object>)
    constructor(arg0: Class<Object>, arg1: Class<Object>)
    constructor(arg0: Class<Object>, arg1: string)
    // private beanAccess: BeanAccess;
    // private delegatesChecked: boolean;
    // private dumpProperties: Property[];
    excludes: string[];
    // private impl: Class<Object>;
    includes: string[];
    readonly properties: JavaMap<string, PropertySubstitute>;
    readonly propertyUtils: PropertyUtils;
    readonly tag: Tag;
    readonly type: Class<Object>;
    addPropertyParameters(arg0: string, ...arg1: Class<Object>[]): void;
    // private checkDelegates(): void;
    // private discoverProperty(arg0: string): Property;
    finalizeConstruction(arg0: Object): Object;
    getProperties(): Property[];
    getProperty(arg0: string): Property;
    getTag(): Tag;
    getType(): Class<Object>;
    newInstance(arg0: Node): Object;
    newInstance(arg0: string, arg1: Node): Object;
    putListPropertyType(arg0: string, arg1: Class<Object>): void;
    putMapPropertyType(arg0: string, arg1: Class<Object>, arg2: Class<Object>): void;
    setExcludes(...arg0: string[]): void;
    setIncludes(...arg0: string[]): void;
    setProperty(arg0: Object, arg1: string, arg2: Object): boolean;
    setPropertyUtils(arg0: PropertyUtils): void;
    setupPropertyType(arg0: string, arg1: Node): boolean;
    substituteProperty(arg0: PropertySubstitute): void;
    substituteProperty(arg0: string, arg1: Class<Object>, arg2: string, arg3: string, ...arg4: Class<Object>[]): void;
    toString(): string;
}