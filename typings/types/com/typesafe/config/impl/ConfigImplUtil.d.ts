import type { ConfigException } from '../../../../com/typesafe/config/ConfigException.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { ExceptionInInitializerError } from '../../../../java/lang/ExceptionInInitializerError.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigImplUtil extends Object {
    static extractInitializerError(paramarg0: ExceptionInInitializerError): ConfigException;
    static joinPath(...paramarg0: string[]): string;
    static joinPath(paramarg0: string[]): string;
    static readOrigin(paramarg0: ObjectInputStream): ConfigOrigin;
    static renderJsonString(paramarg0: string): string;
    static splitPath(paramarg0: string): string[];
    static syntaxFromExtension(paramarg0: string): ConfigSyntax;
    static unicodeTrim(paramarg0: string): string;
    static writeOrigin(paramarg0: ObjectOutputStream, paramarg1: ConfigOrigin): void;
    constructor()
}