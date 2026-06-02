import type { BeanAccess } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/BeanAccess.d.ts'
import type { Property } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { PlatformFeatureDetector } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/PlatformFeatureDetector.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyUtils extends Object {
    constructor()
    constructor(arg0: PlatformFeatureDetector)
    readonly allowReadOnlyProperties: boolean;
    readonly beanAccess: BeanAccess;
    // private platformFeatureDetector: PlatformFeatureDetector;
    // private propertiesCache: Map<Class<Object>, { [key: string]: Property }>;
    // private readableProperties: Map<Class<Object>, Property[]>;
    readonly skipMissingProperties: boolean;
    createPropertySet(arg0: Class<Object>, arg1: BeanAccess): Property[];
    getProperties(arg0: Class<Object>): Property[];
    getProperties(arg0: Class<Object>, arg1: BeanAccess): Property[];
    getPropertiesMap(arg0: Class<Object>, arg1: BeanAccess): { [key: string]: Property };
    getProperty(arg0: Class<Object>, arg1: string): Property;
    getProperty(arg0: Class<Object>, arg1: string, arg2: BeanAccess): Property;
    isAllowReadOnlyProperties(): boolean;
    isSkipMissingProperties(): boolean;
    setAllowReadOnlyProperties(arg0: boolean): void;
    setBeanAccess(arg0: BeanAccess): void;
    setSkipMissingProperties(arg0: boolean): void;
}