import type { JavaMap } from '../../JavaMap.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Provider$EngineDescription } from '../../java/security/Provider$EngineDescription.d.ts'
import type { Provider$UString } from '../../java/security/Provider$UString.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Provider$Service extends Object {
    constructor(arg0: JavaMap<any, any>, arg1: string, arg2: string, arg3: string, arg4: string[], arg5: JavaMap<string, string>)
    readonly algorithm: string;
    // private aliases: string[];
    // private attributes: JavaMap<Provider$UString, string>;
    // private classCache: Object;
    readonly className: string;
    // private constructorCache: Object;
    // private engineDescription: Provider$EngineDescription;
    // private hasKeyAttributes: boolean;
    readonly provider: JavaMap<any, any>;
    // private registered: boolean;
    // private supportedClasses: Class<Object>[];
    // private supportedFormats: string[];
    readonly type: string;
    // private addAlias(arg0: string): void;
    addAttribute(arg0: string, arg1: string): void;
    getAlgorithm(): string;
    // private getAliases(): string[];
    getAttribute(arg0: string): string;
    getClassName(): string;
    // private getDefaultConstructor(): Constructor<Object>;
    // private getImplClass(): Class<Object>;
    // private getKeyClass(arg0: string): Class<Object>;
    getProvider(): JavaMap<any, any>;
    getType(): string;
    // private hasKeyAttributes(): boolean;
    // private isValid(): boolean;
    newInstance(arg0: Object): Object;
    // private newInstanceOf(): Object;
    // private newInstanceUtil(arg0: Class<Object>, arg1: Object): Object;
    // private removeAlias(arg0: string): void;
    removeAttribute(arg0: string, arg1: string): void;
    // private supportsKeyClass(arg0: Key): boolean;
    // private supportsKeyFormat(arg0: Key): boolean;
    supportsParameter(arg0: Object): boolean;
    toString(): string;
}