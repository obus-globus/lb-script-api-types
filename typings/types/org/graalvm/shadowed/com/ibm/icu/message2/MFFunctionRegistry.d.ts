import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormatterFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormatterFactory.d.ts'
import type { MFFunctionRegistry$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry$Builder.d.ts'
import type { SelectorFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/SelectorFactory.d.ts'
export class MFFunctionRegistry extends Object {
    static builder(): MFFunctionRegistry$Builder;
    private constructor(builder: MFFunctionRegistry$Builder)
    // private classToFormatter: JavaMap<Class<Object>, string>;
    // private formattersMap: JavaMap<string, FormatterFactory>;
    // private selectorsMap: JavaMap<string, SelectorFactory>;
    getDefaultFormatterNameForType(clazz: Class<Object>): string;
    getDefaultFormatterTypes(): Class<Object>[];
    getFormatter(formatterName: string): FormatterFactory;
    getFormatterNames(): string[];
    getSelector(selectorName: string): SelectorFactory;
    getSelectorNames(): string[];
}