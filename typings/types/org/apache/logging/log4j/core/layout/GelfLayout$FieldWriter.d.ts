import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GelfLayout } from '../../../../../../org/apache/logging/log4j/core/layout/GelfLayout.d.ts'
import type { ListChecker } from '../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker.d.ts'
import type { TriConsumer } from '../../../../../../org/apache/logging/log4j/util/TriConsumer.d.ts'
export class GelfLayout$FieldWriter extends Object implements TriConsumer<string, Object, StringBuilder> {
    constructor(null_: GelfLayout, checker: ListChecker, prefix: string)
    readonly checker: ListChecker;
    // private prefix: string;
    accept(key: string, value: Object, stringBuilder: StringBuilder): void;
    getChecker(): ListChecker;
}