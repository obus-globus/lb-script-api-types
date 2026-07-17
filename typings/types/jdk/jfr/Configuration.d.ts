import type { JavaMap } from '../../JavaMap.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Configuration extends Object {
    static create(paramarg0: Reader): Configuration;
    static create(paramarg0: Path): Configuration;
    static getConfiguration(paramarg0: string): Configuration;
    static getConfigurations(): Configuration[];
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: JavaMap<string, string>, arg5: string)
    readonly contents: string;
    readonly description: string;
    readonly label: string;
    readonly name: string;
    readonly provider: string;
    readonly settings: JavaMap<string, string>;
    getContents(): string;
    getDescription(): string;
    getLabel(): string;
    getName(): string;
    getProvider(): string;
    getSettings(): JavaMap<string, string>;
}