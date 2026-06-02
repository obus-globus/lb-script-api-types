import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ListFormatter$FormattedList } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$FormattedList.d.ts'
export class ListFormatter$FormattedListBuilder extends Object {
    constructor(start: Object, needsFields: boolean)
    // private needsFields: boolean;
    // private string: FormattedStringBuilder;
    append(compiledPattern: string, next: Object, position: number): ListFormatter$FormattedListBuilder;
    // private appendElement(element: Object, position: number): void;
    appendTo(appendable: Appendable): void;
    getOffset(fieldPositionFoundIndex: number): number;
    toString(): string;
    toValue(): ListFormatter$FormattedList;
}