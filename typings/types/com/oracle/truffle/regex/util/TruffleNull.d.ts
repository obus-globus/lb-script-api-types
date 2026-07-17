import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
export class TruffleNull extends AbstractRegexObject {
    static INSTANCE: TruffleNull;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    private constructor()
    isNull(): boolean;
    toString(): string;
}