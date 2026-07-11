import type { Object } from '../../../../java/lang/Object.d.ts'
export class PeerCredentials extends Object {
    constructor(arg0: number, arg1: number, ...arg2: number[])
    // private gids: number[];
    // private pid: number;
    // private uid: number;
    gids(): number[];
    pid(): number;
    toString(): string;
    uid(): number;
}