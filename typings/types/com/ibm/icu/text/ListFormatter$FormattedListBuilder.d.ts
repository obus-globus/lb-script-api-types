import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ListFormatter$FormattedList } from '../../../../com/ibm/icu/text/ListFormatter$FormattedList.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListFormatter$FormattedListBuilder extends Object {
    constructor(arg0: Object, arg1: boolean)
    // private needsFields: boolean;
    // private string: FormattedStringBuilder;
    append(arg0: string, arg1: Object, arg2: number): ListFormatter$FormattedListBuilder;
    // private appendElement(arg0: Object, arg1: number): void;
    appendTo(arg0: Appendable): void;
    getOffset(arg0: number): number;
    toString(): string;
    toValue(): ListFormatter$FormattedList;
}