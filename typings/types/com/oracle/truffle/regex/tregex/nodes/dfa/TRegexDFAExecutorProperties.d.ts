import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexDFAExecutorProperties extends Object {
    constructor(forward: boolean, searching: boolean, genericCG: boolean, allowSimpleCG: boolean, trackLastGroup: boolean, minResultLength: number)
    readonly allowSimpleCG: boolean;
    readonly forward: boolean;
    readonly genericCG: boolean;
    readonly minResultLength: number;
    readonly searching: boolean;
    readonly simpleCG: boolean;
    readonly simpleCGMustCopy: boolean;
    // private trackLastGroup: boolean;
    canFindStart(): boolean;
    getMinResultLength(): number;
    isAllowSimpleCG(): boolean;
    isBackward(): boolean;
    isForward(): boolean;
    isGenericCG(): boolean;
    isSearching(): boolean;
    isSimpleCG(): boolean;
    isSimpleCGMustCopy(): boolean;
    setCanFindStart(canFindStart: boolean): void;
    setSimpleCG(simpleCG: boolean): void;
    setSimpleCGMustCopy(simpleCGMustCopy: boolean): void;
    tracksLastGroup(): boolean;
}