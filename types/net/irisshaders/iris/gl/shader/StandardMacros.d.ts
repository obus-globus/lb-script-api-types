import type { Matcher } from '../../../../../java/util/regex/Matcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringPair } from '../../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
export class StandardMacros extends Object {
    static createStandardEnvironmentDefines(): StringPair[];
    static formatVersionString(paramarg0: string): string;
    static getFormattedIrisVersion(): string;
    static getGlExtensions(): string[];
    static getGlVersion(paramarg0: number): string;
    static getIrisDefines(): string[];
    static getMcVersion(): string;
    static getOsString(): string;
    static getRenderStages(): { [key: string]: string };
    static getRenderer(): string;
    static getVendor(): string;
    static group(paramarg0: Matcher, paramarg1: string): string;
    constructor()
}