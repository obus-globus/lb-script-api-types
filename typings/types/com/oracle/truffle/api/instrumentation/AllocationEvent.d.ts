import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AllocationEvent extends Object {
    constructor(language: LanguageInfo, value: Object, oldSize: number, newSize: number)
    readonly language: LanguageInfo;
    readonly newSize: number;
    readonly oldSize: number;
    readonly value: Object;
    getLanguage(): LanguageInfo;
    getNewSize(): number;
    getOldSize(): number;
    getValue(): Object;
}