import type { MoreObjects$ToStringHelper } from '../../../../com/google/common/base/MoreObjects$ToStringHelper.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreObjects extends Object {
    static firstNonNull(paramfirst: Object | null, paramsecond: Object | null): Object | null;
    static toStringHelper(paramclazz: Class<Object>): MoreObjects$ToStringHelper;
    static toStringHelper(paramself: Object): MoreObjects$ToStringHelper;
    static toStringHelper(paramclassName: string): MoreObjects$ToStringHelper;
    private constructor()
}