import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JavaParameter extends Object {
    constructor(callable: Member, index: number)
    readonly callable: Member;
    readonly index: number;
}