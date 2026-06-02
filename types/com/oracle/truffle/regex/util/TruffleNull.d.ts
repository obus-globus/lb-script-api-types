import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleNull extends AbstractRegexObject {
    static INSTANCE: TruffleNull;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    private constructor()
    isNull(): boolean;
    toString(): string;
}