import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
export class OptionConverter extends Object {
    static concatenateArrays(paraml: (Object | null)[], paramr: (Object | null)[]): (Object | null)[];
    static convertSpecialChars(params: string): string;
    static findAndSubst(paramkey: string, paramprops: Properties): string;
    static instantiateByClassName(paramclassName: string, paramsuperClass: Class<Object>, paramdefaultValue: Object): Object;
    static instantiateByKey(paramprops: Properties, paramkey: string, paramsuperClass: Class<Object>, paramdefaultValue: Object): Object;
    static substVars(paramval: string, paramprops: Properties): string;
    static toBoolean(paramvalue: string, paramdefaultValue: boolean): boolean;
    static toFileSize(paramvalue: string, paramdefaultValue: number): number;
    static toInt(paramvalue: string, paramdefaultValue: number): number;
    static toLevel(paramvalue: string, paramdefaultValue: Level): Level;
    private constructor()
}