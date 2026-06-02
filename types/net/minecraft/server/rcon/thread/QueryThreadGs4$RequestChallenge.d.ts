import type { DatagramPacket } from '../../../../../java/net/DatagramPacket.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QueryThreadGs4$RequestChallenge extends Object {
    constructor(src: DatagramPacket)
    readonly challenge: number;
    readonly challengeBytes: number[];
    readonly ident: string;
    readonly identBytes: number[];
    // private time: number;
    before(time: number): boolean;
    getChallenge(): number;
    getChallengeBytes(): number[];
    getIdent(): string;
    getIdentBytes(): number[];
}