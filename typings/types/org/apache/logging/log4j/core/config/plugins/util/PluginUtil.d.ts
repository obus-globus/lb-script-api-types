import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class PluginUtil extends Object {
    static collectPluginsByCategory(paramcategory: string): { [key: string]: PluginType<Object> };
    static collectPluginsByCategoryAndPackage(paramcategory: string, parampackages: string[]): { [key: string]: PluginType<Object> };
    static findPluginFactoryMethod(parampluginClass: Class<Object>): Method;
    static instantiatePlugin<V extends unknown>(parampluginClass: Class<V>): V;
    private constructor()
}