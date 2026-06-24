import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VisibilitySet } from '../../../../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
export class VisibilityEncoding extends Object {
    static bit(paramarg0: number, paramarg1: number): number;
    static encode(paramarg0: VisibilitySet): number;
    static getConnections(paramarg0: number): number;
    static getConnections(paramarg0: number, paramarg1: number): number;
    constructor()
}