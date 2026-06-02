import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MemoryTracer$AllocationEventInfo extends Object {
    constructor(language: LanguageInfo, allocated: number, realocation: boolean, metaObjectString: string)
    readonly allocated: number;
    readonly language: LanguageInfo;
    readonly metaObjectString: string;
    readonly reallocation: boolean;
    getAllocated(): number;
    getLanguage(): LanguageInfo;
    getMetaObjectString(): string;
    isReallocation(): boolean;
}