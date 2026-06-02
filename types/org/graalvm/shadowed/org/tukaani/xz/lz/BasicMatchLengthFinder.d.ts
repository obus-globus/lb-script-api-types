import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MatchLengthFinder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/MatchLengthFinder.d.ts'
export class BasicMatchLengthFinder extends Object implements MatchLengthFinder {
    constructor()
    getExtraSize(): number;
    getLen(buf: number[], off: number, delta: number, len: number, lenLimit: number): number;
}