import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ForbiddenSymlinkInfo extends Record {
    constructor(link: Path[], target: Path[])
    // private link: Path[];
    // private target: Path[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    link(): Path[];
    target(): Path[];
    toString(): string;
}