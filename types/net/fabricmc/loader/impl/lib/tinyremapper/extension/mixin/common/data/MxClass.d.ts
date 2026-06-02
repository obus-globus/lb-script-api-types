import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
export class MxClass extends Object {
    constructor(arg0: string)
    // private name: string;
    getField(arg0: string, arg1: string): MxMember;
    getMethod(arg0: string, arg1: string): MxMember;
}