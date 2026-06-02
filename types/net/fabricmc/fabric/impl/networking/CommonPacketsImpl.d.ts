import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommonPacketsImpl extends Object {
    static PACKET_VERSION_1: number;
    static SUPPORTED_COMMON_PACKET_VERSIONS: number[];
    static getHighestCommonVersion(paramarg0: number[], paramarg1: number[]): number;
    static init(): void;
    constructor()
}